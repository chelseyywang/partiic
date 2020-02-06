import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, 
    TouchableOpacity
  } from 'react-native';
import Login from '../Login/Login';

export default class Home extends Component {
    render() {
      return (
        <>
          {/* <View>
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
        </View> */}
        <Login />
        <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.button}>1</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.button}>2</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.button}>3</Text></TouchableOpacity>
        </View>
        </>
      );
    }
  }
  
  const styles = StyleSheet.create({
    partiic: {
      textAlign: 'center', 
      fontSize: 30, 
      marginTop: 50, 
    },
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