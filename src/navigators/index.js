/**
 * @prettier
 */

import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import Listing from '../components/listings';

export const StackNavigator = createStackNavigator(
  {
    Listing: {
      screen: Listing,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
      },
    },
  },
  {
    mode: 'modal',
  },
);

export const navigationReducer = createNavigationReducer(StackNavigator);

export const navigationMiddleware = createReactNavigationReduxMiddleware('root', ({navigation}) => navigation);

const ReduxStackNavigator = reduxifyNavigator(StackNavigator, 'root');

class AppNavigator extends React.Component {
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  render() {
    const {dispatch, navigation} = this.props;
    return <ReduxStackNavigator dispatch={dispatch} state={navigation} />;
  }
}

export default (navigator = connect(({navigation}) => ({navigation}))(AppNavigator));
