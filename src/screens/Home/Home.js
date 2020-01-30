import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, Text} from 'react-native';


export default class HomeComp extends Component {
    render() {
      return (
        <Text style={styles.partiic}> Welcome to Partiic</Text> 
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