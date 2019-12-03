import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import SearchScreen from './screens/SearchScreen'
import Result from './screens/Result'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: Result
  
  },
  { 
    initialRouteName:'Search',
    defaultNavigationOptions:{
      title: 'Search'
  
    }
  }
)
export default createAppContainer(navigator) 