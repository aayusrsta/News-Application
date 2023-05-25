import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SportScreen from './ArticleScreen1'
//import TechScreen from './ArticleScreen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from './SearchScreen';
import BottomTab from '../navigation/bottomTab';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <BottomTab/>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    head:{
        marginBottom:510,
        marginTop:50,
        fontSize:30,
        fontWeight:'bold',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
})