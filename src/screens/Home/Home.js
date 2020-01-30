import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';

export default class Home extends Component {
    render() {
      return (
          <View>
        <Text style={styles.partiic}> Welcome to Partiic</Text> 
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    partiic: {
      textAlign: 'center', 
      fontSize: 30, 
      marginTop: 50, 
    },
  });