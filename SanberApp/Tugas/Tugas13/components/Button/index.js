/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({name}) => {
  return (
    <View style={styles.Btn}>
      <Text styles={styles.title}>{name}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  Btn: {backgroundColor: 'black'},
  title: {textAlign: 'center'},
});
