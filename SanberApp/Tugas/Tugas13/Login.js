/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Let's sign you in.</Text>
        <Text style={styles.descTitle}>Welcome back. You've been missed!</Text>
      </View>
      <View style={styles.Btn}>
        <Text style={styles.desc}>
          Don’t have an account?<Text style={styles.desc2}> Register</Text>
        </Text>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'space-between',
    backgroundColor: '#1B1C1E',
    flex: 1,
  },
  descTitle: {
    fontSize: 24,
    maxWidth: 220,
    marginTop: 7,
    color: '#F8F8FF',
  },
  desc: {color: '#828387', marginBottom: 23},
  desc2: {color: '#F8F8FF'},
});
