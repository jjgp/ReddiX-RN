/**
 * @prettier
 */

import {call, put, select, take} from 'redux-saga/effects';
import {appendChildren, fetchChildrenErrored, fetchChildrenSuccess, replaceChildren} from '../actions/listings';

function* fetchChildren(action) {
  const {
    listings: {subreddit},
  } = yield select();

  const path = subreddit ? `r/${subreddit}/.json` : '.json';
  try {
    const response = yield call(fetch, `https://reddit.com/${path}`);
    let {
      data: {children},
    } = yield call([response, response.json]);
    children = children.map(child => child.data);
    action = action.replacement ? replaceChildren(children) : appendChildren(children);
    yield put(action);
    yield put(fetchChildrenSuccess);
  } catch (e) {
    yield put(fetchChildrenErrored);
  }
}

export default function* listings() {
  while (true) {
    const action = yield take('FETCH_CHILDREN');
    yield call(fetchChildren, action);
  }
}
