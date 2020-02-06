// login
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
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from '../../screens/Home/Home'; 


class BottomBar extends React.Component {
    render() {
      return (
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.button}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Login')}><Text style={styles.button}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Login')}><Text style={styles.button}>3</Text></TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      position: "absolute",
      left: 0, 
      right: 0, 
      bottom: 0, 
      marginTop: 10, 
      padding: 10
    }, 
    button: {
        fontSize: 18,
        color: "white"
    }
  });
  export default BottomBar;