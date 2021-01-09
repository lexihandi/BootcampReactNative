/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
  StatusBar,
} from 'react-native';
import {Input, Button} from '../../components';
import {fonts} from '../../utils';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isError: false,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAction());
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () =>
      this.backAction(),
    );
  }

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

  loginHandler() {
    if (this.state.password !== '12345678') {
      this.setState({isError: true});
    } else {
      this.setState({isError: false});
      this.props.navigation.replace('Home', {userName: this.state.userName});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#222831" barStyle="light-content" />
        <View>
          <Text style={styles.title}>Let's sign you in.</Text>
          <Text style={styles.descTitle}>
            Welcome back. Stay safe and keep healthy
          </Text>
        </View>
        <View>
          <Input
            placeholder="Username"
            onChangeText={(userName) => this.setState({userName})}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.desc}>
              Don’t have an account?
              <Text style={styles.desc2}> Register</Text>
            </Text>
          </TouchableOpacity>
          <View>
            <Button name="Sign In" onPress={() => this.loginHandler()} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'space-between',
    backgroundColor: '#222831',
    flex: 1,
  },
  title: {fontSize: 28, fontFamily: fonts.primary.Bold, color: '#f8f8ff'},
  descTitle: {
    fontSize: 18,
    maxWidth: 220,
    marginTop: 7,
    color: '#F8F8FF',
    fontFamily: fonts.primary[300],
  },
  desc: {color: '#828387', marginBottom: 32, textAlign: 'center'},
  desc2: {color: '#F8F8FF'},
});
