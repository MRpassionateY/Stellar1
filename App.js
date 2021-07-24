import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpaceCraftScreen from './Screens/SpaceCrafts';
import StarMapScreen from './Screens/StarMap';
import DailyPicScreen from './Screens/DailyPic';
import HomeScreen from './Screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  render () {
    return (
      <View
          style={{
            flex:1,
            justifyCotnent: "center",
            alignItems: "center"
          }}>
            <Text>Space Craft</Text>
          </View>
    )
  }
}
const Stack = createStackNavigator();
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home" screenOptions={{
        headerShown : false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SpaceCraft" componenet={SpaceCraftScreen} />
          <Stack.Screen name="DailyPics" component={DailyPicScreen} />
          <Stack.Screen name="Star Maps" componenet={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  

   
const styles = StyleSheet.create({
  container: {        
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
