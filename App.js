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

// import { Router, Scene } from 'react-native-router-flux';

// import { enableScreens } from 'react-native-screens';
// screens
import Home from './src/screens/Home/Home'; 
import Login from './src/screens/Login/Login'; 
import Profile from './src/screens/Profile/Profile'; 
import Signup from './src/screens/Signup/Signup'; 
import EventDescription from './src/screens/EventDescription/EventDescription'; 

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home, 
      navigationOptions: {
          headerShown: false,
      },
    },
    Login: {
      screen: Login, 
      navigationOptions: {
          headerShown: false,
      },
    },
    Profile: {
      screen: Profile, 
      navigationOptions: {
          headerShown: false,
      },
    },
    Signup: {
      screen: Signup, 
      navigationOptions: {
          headerShown: false,
      },
    },
    EventDescription: {
      screen: EventDescription, 
      navigationOptions: {
          headerShown: false,
      },
    },
    },
  //   {
  //     initialRouteName: 'Home',
  //   }, 
  //   {
  //     defaultNavigationOptions: {
  //     headerShown: false, 
  //   },
  // }
);

export default createAppContainer(AppNavigator);



