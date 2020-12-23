/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import {fonts} from './utils';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Let's sign you in.</Text>
        <Text style={styles.descTitle}>Welcome back. You've been missed!</Text>
      </View>
      <View>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.desc}>
            Don’t have an account?
            <Text style={styles.desc2}> Register</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button name="Sign In" />
        </TouchableOpacity>
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
  title: {fontSize: 28, fontFamily: fonts.primary.bold, color: '#f8f8ff'},
  descTitle: {
    fontSize: 24,
    maxWidth: 220,
    marginTop: 7,
    color: '#F8F8FF',
  },
  desc: {color: '#828387', marginBottom: 32, textAlign:'center'},
  desc2: {color: '#F8F8FF'},
});
