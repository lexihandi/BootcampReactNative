/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {fonts} from './utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch('https://api.kawalcorona.com/indonesia/provinsi')
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

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(
  //       'https://api.kawalcorona.com/indonesia/provinsi',
  //     );
  //     const responseJson = await response.json();
  //     this.setState({
  //       isLoading: false,
  //       dataSource: responseJson,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      let data = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.wrapper}>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.item}>{val.attributes.Provinsi}</Text>
              <Text style={styles.itemm}>{val.attributes.Kasus_Posi}</Text>
              <Text style={styles.titleItem}>Positif</Text>
            </TouchableOpacity>
          </View>
        );
      });
      return <View style={styles.page}>{data}</View>;
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  titleItem: {
    color: '#dddddd',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 6,
    fontFamily: fonts.primary[300],
  },
  item: {
    color: '#dddddd',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[300],
  },
  itemm: {
    color: '#dddddd',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 4,
    fontFamily: fonts.primary[500],
  },
  box: {
    backgroundColor: '#00587a',
    borderRadius: 6,
    padding: 15,
  },
});
