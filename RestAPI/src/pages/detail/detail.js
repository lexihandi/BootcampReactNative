/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  IconBackWhite,
  IconFlatFace,
  IconHappyFace,
  IconRoundedSmall,
  IconSadFace,
  ILBanner,
} from '../../assets';
import {fonts} from '../../utils';

const Detail = ({route, navigation}) => {
  const {prov, positif, sembuh, meninggal} = route.params;
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity>
          <IconBackWhite onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
        <Text style={styles.title}>Data Provinsi</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILBanner style={styles.banner} />
        <Text style={styles.prov}>{prov}</Text>
        <Text style={styles.info}>Informasi Terbaru</Text>
        <View style={styles.wrapper}>
          <View style={styles.boxPositif}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <IconRoundedSmall />
                <IconRoundedSmall />
                <IconRoundedSmall />
              </View>
              <IconFlatFace />
              <View style={styles.content}>
                <Text style={styles.text}>Positif</Text>
                <Text style={styles.desc}>{positif} kasus</Text>
              </View>
            </View>
          </View>
          <View style={styles.boxSembuh}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <IconRoundedSmall />
                <IconRoundedSmall />
                <IconRoundedSmall />
              </View>
              <IconHappyFace />
              <View style={styles.content}>
                <Text style={styles.text}>Sembuh</Text>
                <Text style={styles.desc}>{sembuh} kasus</Text>
              </View>
            </View>
          </View>
          <View style={styles.boxMeninggal}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <IconRoundedSmall />
                <IconRoundedSmall />
                <IconRoundedSmall />
              </View>
              <IconSadFace />
              <View style={styles.content}>
                <Text style={styles.text}>Meninggal</Text>
                <Text style={styles.desc}>{meninggal} kasus</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#222831', padding: 15},
  header: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginLeft: 20,
    color: '#f8f8ff',
  },
  banner: {marginTop: 25, alignItems: 'center'},
  prov: {
    fontFamily: fonts.primary[600],
    color: '#f8f8ff',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 40,
  },
  container: {flexDirection: 'row'},
  wrapper: {marginTop: 15},
  info: {
    fontFamily: fonts.primary[300],
    fontSize: 18,
    color: '#f8f8ff',
    marginTop: 28,
  },
  content: {marginLeft: 20},
  text: {
    color: '#f8f8ff',
    fontFamily: fonts.primary[500],
    fontSize: 18,
  },
  desc: {
    color: '#f8f8ff',
    fontFamily: fonts.primary[500],
    fontSize: 18,
    textAlign: 'center',
  },
  boxPositif: {backgroundColor: '#A9294F', borderRadius: 6, padding: 10},
  boxSembuh: {
    backgroundColor: '#00917C',
    borderRadius: 6,
    padding: 10,
    marginVertical: 20,
  },
  boxMeninggal: {
    backgroundColor: '#654062',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  icon: {justifyContent: 'space-between', right: 17},
});
