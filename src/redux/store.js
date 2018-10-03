/**
 * @prettier
 */

import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {navigationMiddleware} from '../navigators';
import reducers from './reducers';
import main from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [navigationMiddleware, sagaMiddleware];

let composer;
if (__DEV__) {
  composer = composeWithDevTools;
} else {
  composer = compose;
}

const store = createStore(reducers, composer(applyMiddleware(...middleware)));
sagaMiddleware.run(main);

export default store;
