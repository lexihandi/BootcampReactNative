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
        <Button name="Sign In" />
        <Button name="Register" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 30,
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
