/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  SignIn,
  CreateAccount,
  Profile,
  Home,
  Search,
  Details,
  Search2,
} from './Screen';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({route}) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{headerShown: false}}
    />
    <SearchStack.Screen
      name="Search2"
      component={Search2}
      options={{headerShown: false}}
    />
  </SearchStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
