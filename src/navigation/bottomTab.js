import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SportScreen from '../screens/ArticleScreen1';
//import TechScreen from './ArticleScreen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
        
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'red'
      }}>
        <Tab.Screen name="Home" component={SportScreen} />
        <Tab.Screen name="Search" component={SearchScreen}/>
      </Tab.Navigator>
      </NavigationContainer> 
  )
}

export default BottomTab;

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