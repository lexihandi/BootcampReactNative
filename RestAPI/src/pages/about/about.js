/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
  StatusBar,
} from 'react-native';
import {
  IconBack,
  IconCall,
  IconLetter,
  IconLogout,
  IconRectangle,
  IconRounded,
} from '../../assets';
import {fonts} from '../../utils';

export default class About extends Component {
  backAction = () => {
    Alert.alert('Perhatian', 'Apa kamu yakin ingin keluar dari aplikasi?', [
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Ya', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  render() {
    return (
      <View style={styles.page}>
        <StatusBar backgroundColor="#f8f8ff" barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity>
            <IconBack onPress={() => this.props.navigation.navigate('Home')} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Informasi Akun</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.account}>
            <Image
              source={require('../../assets/Img_Profile.png')}
              style={styles.img}
            />
            <Text style={styles.name}>{this.props.route.params.userName}</Text>
            <Text style={styles.city}>Malang</Text>
            <Text style={styles.city}>Mahasiswa</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.box}>
              <View style={styles.content}>
                <IconCall />
                <IconRectangle style={styles.rectangle} />
                <View style={styles.data}>
                  <Text style={styles.title}>No HP</Text>
                  <Text style={styles.text}>62812345678</Text>
                </View>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.content}>
                <IconLetter />
                <IconRectangle style={styles.rectangle} />
                <View style={styles.data}>
                  <Text style={styles.title}>Email</Text>
                  <Text style={styles.text}>huxley@gmail.com</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.box}>
              <View style={styles.content}>
                <IconRounded />
                <IconRectangle style={styles.rectangle} />
                <View style={styles.data}>
                  <Text style={styles.title}>Bantu Sesama</Text>
                  <Text style={styles.text}>Mari Donasi</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.backAction()}>
              <View style={styles.content}>
                <IconLogout />
                <IconRectangle style={styles.rectangle} />
                <View style={styles.data}>
                  <Text style={styles.title}>Logout</Text>
                  <Text style={styles.text}>Keluar dari aplikasi</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#f8f8ff', justifyContent: 'space-between'},
  header: {
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeader: {fontFamily: fonts.primary[600], fontSize: 16, marginLeft: 20},
  account: {alignItems: 'center', marginTop: 25},
  img: {height: 120, width: 120},
  wrapper: {backgroundColor: '#222831', marginTop: 30, padding: 20},
  name: {
    color: '#525464',
    fontFamily: fonts.primary[500],
    fontSize: 24,
    marginTop: 20,
  },
  title: {fontFamily: fonts.primary[500], fontSize: 14, color: 'white'},
  city: {fontFamily: fonts.primary[500], fontSize: 16, color: '#838391'},
  text: {color: 'white', fontFamily: fonts.primary[500], fontSize: 16},
  content: {flexDirection: 'row', alignItems: 'center', marginLeft: 10},
  box: {
    marginVertical: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E2E0',
  },
  data: {marginLeft: 20},
  rectangle: {marginLeft: 20},
});
