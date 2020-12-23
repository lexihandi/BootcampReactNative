/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import {fonts} from './utils';

const Register = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Register First.</Text>
        <Text style={styles.descTitle}>
          Hello new member. Ready for show off your skill?
        </Text>
      </View>
      <View>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Input placeholder="Re-type Password" />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.desc}>
          Already have an account?
            <Text style={styles.desc2}> Sign In</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button name="Register" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

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
    maxWidth: 280,
    marginTop: 7,
    color: '#F8F8FF',
  },
  desc: {color: '#828387', marginBottom: 32, textAlign:'center'},
  desc2: {color: '#F8F8FF'},
});
