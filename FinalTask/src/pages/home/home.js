/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconAccount, ILDoctor} from '../../assets';
import Provinsi from '../../provinsi';
import {fonts} from '../../utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch('https://api.kawalcorona.com/indonesia')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator color="white" />
        </View>
      );
    } else {
      let data = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.wrapper}>
            <View style={styles.box}>
              <Text style={styles.item}>{val.positif}</Text>
              <Text style={styles.titleItem}>Positif</Text>
            </View>
            <View style={styles.boxSembuh}>
              <Text style={styles.item}>{val.sembuh}</Text>
              <Text style={styles.titleItem}>Sembuh</Text>
            </View>
            <View style={styles.boxDie}>
              <Text style={styles.item}>{val.meninggal}</Text>
              <Text style={styles.titleItem}>Meninggal</Text>
            </View>
          </View>
        );
      });
      return (
        <View style={styles.page}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerText}>Info Copid</Text>
              <Text style={styles.headerTextt}>#staysafe #dirumahaja</Text>
            </View>
            <TouchableOpacity style={styles.icon}>
              <IconAccount
                onPress={() => this.props.navigation.push('About')}
              />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.img}>
              <ILDoctor />
            </View>
            {data}
            <Text style={styles.headerTexttt}>Data Provinsi</Text>
            <Provinsi />
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#222831', padding: 15},
  img: {marginVertical: 20, alignItems: 'center'},
  icon: {marginRight: 10},
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {fontSize: 28, color: '#f8f8ff', fontFamily: fonts.primary[600]},
  headerTextt: {
    fontSize: 14,
    color: '#838391',
    fontFamily: fonts.primary[300],
  },
  headerTexttt: {
    fontSize: 28,
    color: '#f8f8ff',
    marginTop: 25,
    fontFamily: fonts.primary[600],
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  titleItem: {
    color: '#dddddd',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 6,
  },
  item: {color: '#dddddd', textAlign: 'center', fontSize: 26},
  box: {
    backgroundColor: '#a9294f',
    borderRadius: 6,
    flex: 1,
    margin: 2,
    paddingVertical: 10,
  },
  boxSembuh: {
    backgroundColor: '#00917c',
    borderRadius: 6,
    flex: 1,
    margin: 2,
    paddingVertical: 10,
  },
  boxDie: {
    backgroundColor: '#654062',
    borderRadius: 6,
    flex: 1,
    margin: 2,
    paddingVertical: 10,
  },
});
