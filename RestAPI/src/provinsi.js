/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {IconRoundedSmall} from './assets';
import {fonts} from './utils';

export default class Provinsi extends Component {
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

  render() {
    const {navigate} = this.props.navigation;
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
            <IconRoundedSmall />
            <TouchableOpacity
              style={styles.box}
              onPress={() =>
                navigate('Detail', {
                  prov: val.attributes.Provinsi,
                  positif: val.attributes.Kasus_Posi,
                  sembuh: val.attributes.Kasus_Semb,
                  meninggal: val.attributes.Kasus_Meni,
                })
              }>
              <View style={styles.icon}>
                <IconRoundedSmall />
                <Text style={styles.item}>{val.attributes.Provinsi}</Text>
                <IconRoundedSmall />
              </View>
              <View style={styles.icon}>
                <IconRoundedSmall />
                <Text style={styles.itemm}>{val.attributes.Kasus_Posi}</Text>
                <IconRoundedSmall />
              </View>
              <View style={styles.icon}>
                <IconRoundedSmall />
                <Text style={styles.titleItem}>Positif</Text>
                <IconRoundedSmall />
              </View>
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
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
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
