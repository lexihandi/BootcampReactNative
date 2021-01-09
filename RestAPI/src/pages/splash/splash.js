/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {IconVirus} from '../../assets';
import {fonts} from '../../utils';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <View style={styles.wrapper}>
        <IconVirus />
        <Text style={styles.text}>Info Copid</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#222831'},
  wrapper: {alignItems: 'center', marginTop: 140},
  text: {
    fontFamily: fonts.primary[700],
    color: '#f8f8ff',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 33,
  },
});
