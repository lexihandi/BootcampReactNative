/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
import data from './data.json';

export default class YoutubeUI extends Component {
  render() {
    return (
      <View style={styles.page}>
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
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(video) => <VideoItem video={video.item} />}
            keyExtractor={(item) => item.id}
            itemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
            )}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1},
  navbar: {
    height: 55,
    backgroundColor: '#fff',
    elevation: 5,
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
  body: {flex: 1},
  tabBar: {
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tabItem: {alignItems: 'center', justifyContent: 'center'},
  tabTitle: {fontSize: 11, color: '#3c3c3c', paddingTop: 4},
});
