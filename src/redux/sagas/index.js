/**
 * @prettier
 */

import {all, call} from 'redux-saga/effects';
import listings from './listings';

export default function* main() {
  yield all([call(listings)]);
}
