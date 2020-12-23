/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const About = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>About Me</Text>
        <TouchableOpacity>
          <View style={styles.account}>
            <View style={styles.photo}>
              <Image source={require('../Vector.png')} style={styles.avatar} />
            </View>
            <Text style={styles.name}>Huxley</Text>
            <Text style={styles.profession}>React Native Developer</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.porto}>
          <Text style={styles.contactTitle}>Portofolio</Text>
          <View style={styles.line} />
          <View style={styles.logoPorto}>
            <Icon name="logo-github" size={35} />
            <Icon name="logo-linkedin" size={35} />
          </View>
          <View style={styles.logoText}>
            <Text style={styles.textContact}>@huxley</Text>
            <Text style={styles.textContact}>huxley</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactTitle}>Contact Me</Text>
          <View style={styles.line} />
          <View style={styles.wrapper}>
            <View style={styles.medsos}>
              <Icon name="logo-facebook" size={55} color={'#f8f8ff'} />
              <Text style={styles.textContact}>huxley</Text>
            </View>
            <View style={styles.medsos}>
              <Icon name="logo-twitter" size={55} color={'#f8f8ff'} />
              <Text style={styles.textContact}>huxley</Text>
            </View>
            <View style={styles.medsos}>
              <Icon name="logo-instagram" size={55} color={'#f8f8ff'} />
              <Text style={styles.textContact}>huxley</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 5,
  },
  account: {marginTop: 15, alignItems: 'center', marginBottom: 15},
  photo: {
    borderRadius: 80 / 2,
    height: 80,
    width: 80,
    backgroundColor: '#f8f8ff',
  },
  avatar: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 25,
    top: 0,
    marginTop: 25,
  },
  name: {
    fontFamily: fonts.primary.bold,
    fontSize: 24,
    color: '#f8f8ff',
    marginVertical: 10,
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: '#f8f8ff',
  },
  porto: {backgroundColor: '#3B3C3F', borderRadius: 16, padding: 8},
  line: {borderWidth: 1, marginTop: 8},
  logoPorto: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  logoText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  contact: {
    backgroundColor: '#3B3C3F',
    borderRadius: 16,
    padding: 8,
    marginTop: 9,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: '#f8f8ff',
  },
  wrapper: {alignItems: 'center', marginTop: 18},
  textContact: {color: '#f8f8ff', marginLeft: 18, fontSize: 20},
  medsos: {flexDirection: 'row', alignItems: 'center', marginBottom: 20},
});
