/**
 * @prettier
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export const Child = ({item}) => (
  <TouchableOpacity style={{backgroundColor: '#FFFFFF', marginBottom: 5}}>
    <Text style={{color: '#B6B6B6', fontFamily: 'System', fontSize: 12, marginBottom: 5}}>{`/r/${
      item.subreddit
    }`}</Text>
    <Text style={{fontFamily: 'System', fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
  </TouchableOpacity>
);
