/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({name, placeholder}) => {
  return (
    <View style={styles.bgInput}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#828387'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  bgInput: {
    borderColor: '#3b3c3f',
    marginBottom: 33,
    borderRadius: 10,
    backgroundColor: '#1B1C1E',
    borderWidth: 1,
  },
  text: {color: '#f8f8ff', paddingStart: 22},
  input: {color: '#f8f8ff', marginStart:15},
});
