/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const About = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>About Me</Text>
      <View style={styles.porto}>
        <Text>Portofolio</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Contact Me</Text>
        <View style={styles.line} />
        <View style={styles.wrapper}>
          <View style={styles.medsos}>
            <Icon name="logo-facebook" size={25} color={'#f8f8ff'} />
            <Text style={styles.textContact}>huxley</Text>
          </View>
          <View style={styles.medsos}>
            <Icon name="logo-twitter" size={25} color={'#f8f8ff'} />
            <Text style={styles.textContact}>huxley</Text>
          </View>
          <View style={styles.medsos}>
            <Icon name="logo-instagram" size={25} color={'#f8f8ff'} />
            <Text style={styles.textContact}>huxley</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {backgroundColor: '#1B1C1E', flex: 1, padding: 20},
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 36,
    color: '#f8f8ff',
    textAlign: 'center',
    marginTop: 34,
  },
  porto: {backgroundColor: '#3B3C3F', borderRadius: 16, padding: 8},
  line: {borderWidth: 1, marginTop: 8},
  contact: {
    backgroundColor: '#3B3C3F',
    borderRadius: 16,
    padding: 8,
    marginTop: 9,
  },
  contactTitle: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: '#f8f8ff',
  },
  wrapper: {alignItems: 'center', marginTop:18},
  textContact: {color: '#f8f8ff', marginLeft:18},
  medsos: {flexDirection: 'row', alignItems: 'center', marginBottom:20},
});
