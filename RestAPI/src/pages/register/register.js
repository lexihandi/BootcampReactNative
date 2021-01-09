/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Input} from '../../components';
import {fonts} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Register First.</Text>
        <Text style={styles.descTitle}>
          Hello, don't forget to wash your hands
        </Text>
      </View>
      <View>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Input placeholder="Re-type Password" />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: '#222831',
    flex: 1,
  },
  title: {fontSize: 28, fontFamily: fonts.primary.Bold, color: '#f8f8ff'},
  descTitle: {
    fontSize: 18,
    maxWidth: 220,
    marginTop: 7,
    color: '#F8F8FF',
    fontFamily: fonts.primary[300],
  },
  desc: {color: '#828387', marginBottom: 32, textAlign: 'center'},
  desc2: {color: '#F8F8FF'},
});
