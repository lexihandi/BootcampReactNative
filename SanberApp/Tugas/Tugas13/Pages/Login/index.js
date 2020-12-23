/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Button} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Let's sign you in.</Text>
        <Text style={styles.descTitle}>Welcome back. You've been missed!</Text>
      </View>
      <View>
        <Text>
          Dont have an account?<Text> Register</Text>
        </Text>
        <Button name="Sign In"/>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 30,
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    flex: 1,
  },
  title: {fontFamily: fonts.primary.bold, fontSize: 28},
  descTitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 24,
    maxWidth: 220,
    marginTop: 7,
  },
});
