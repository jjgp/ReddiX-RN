/**
 * @prettier
 */

import {combineReducers} from 'redux';
import listingsReducer from './listings';
import {navigationReducer} from '../../navigators';

const reducers = combineReducers({
  listings: listingsReducer,
  navigation: navigationReducer,
});

export default reducers;
