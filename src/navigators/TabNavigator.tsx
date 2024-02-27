import React from 'react';
import {
  HomeScreen,
  SearchScreen,
  TicketScreen,
  UserAccountScreen,
} from '../packages/screenPackages';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Define the tabs and their associated screens
// This is from https://reactnavigation.org/docs/bottom-tab-navigator/
const Tab = createBottomTabNavigator();

// Tab component that will render the tabs and handle the navigation between them
const TabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
      <Tab.Screen name='Search' component={SearchScreen}></Tab.Screen>
      <Tab.Screen name='Ticket' component={TicketScreen}></Tab.Screen>
      <Tab.Screen name='User' component={UserAccountScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  contianer: {},
});

export default TabNavigator