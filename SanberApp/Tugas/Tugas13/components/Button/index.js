/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
