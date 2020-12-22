/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={require('./images/logo.png')} style={styles.navImg} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon size={25} name="search" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} size={25} name="account-circle" />
            </TouchableOpacity>
          </View>
        </View>
        <Text>asd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  navbar: {
    height: 55,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  navImg: {
    width: 98,
    height: 22,
  },
  rightNav: {flexDirection: 'row'},
  navItem: {marginLeft: 25},
});
