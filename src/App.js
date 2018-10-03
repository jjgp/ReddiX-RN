/**
 * @prettier
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './navigators';
import store from './redux/store';

export default () => (
  <>
    <View style={{height: 20, backgroundColor: '#F5F5F5'}}>
      <StatusBar translucent backgroundColor="#F5F5F5" />
    </View>
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  </>
);
