import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
   <Tabs 
   screenOptions={{
    tabBarActiveBackgroundColor: Colors.primary,
    tabBarLabelStyle: {
      fontFamily:'mon-sb',
    }
   }}>
    <Tabs.Screen name='index' options={{
      tabBarLabel:'Explore',
      tabBarIcon: ({color, size})=>
      <Ionicons name='search' color={color} size ={size}/>
    }}/>
     <Tabs.Screen name='playlist' options={{
      tabBarLabel:'Playlist',
      tabBarIcon: ({color, size})=>
      <FontAwesome5 name='list' color={color} size={size} />
    }}/>
    <Tabs.Screen name='inbox' options={{
      tabBarLabel:'Inbox',
      tabBarIcon: ({color, size})=>
      <MaterialCommunityIcons name='message-outline' color={color} size={size}/>
    }}/>
    <Tabs.Screen name='profile' options={{
      tabBarLabel: 'Profile',
      tabBarIcon:({color, size})=>
      <Ionicons name='person-circle-outline' color={color} size={size}/>
    }}/>

   </Tabs>
  )
}

export default Layout