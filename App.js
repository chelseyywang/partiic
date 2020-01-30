/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
// screens
import Home from './src/screens/Home/Home'; 
import Login from './src/screens/Login/Login'; 
import Profile from './src/screens/Profile/Profile'; 
import Signup from './src/screens/Signup/Signup'; 

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home, 
      navigationOptions: {
          header: null,
      },
    },
    Login: {
      screen: Login, 
      navigationOptions: {
          header: null,
      },
    },
    Profile: {
      screen: Profile, 
      navigationOptions: {
          header: null,
      },
    },
    Signup: {
      screen: Signup, 
      navigationOptions: {
          header: null,
      },
    },
    },
    {
      initialRouteName: 'Home',
    }, 
    {
      defaultNavigationOptions: {
      header: null, 
    },
  }
);

export default createAppContainer(AppNavigator);



