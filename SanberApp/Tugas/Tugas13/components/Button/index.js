/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils';

const Button = ({name}) => {
  return (
    <View style={styles.Btn}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  Btn: {backgroundColor: 'white'},
  title: {textAlign: 'center', fontFamily: fonts.primary[700], fontSize: 18},
});
