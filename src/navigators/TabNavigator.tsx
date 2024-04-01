import React from 'react';
import {
  HomeScreen,
  SearchScreen,
  TicketScreen,
  UserAccountScreen,
} from '../packages/screenPackages';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Define the tabs and their associated screens
// This is from https://reactnavigation.org/docs/bottom-tab-navigator/
const Tab = createBottomTabNavigator();

// Tab component that will render the tabs and handle the navigation between them
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true, // Whenever we are on the keyboard, the tab bar will hide
        headerShown: false, // Hides headers for all screens in this navigator
        tabBarStyle: {
          backgroundColor: COLORS.Black, // Background color of the bottom tab
          borderTopWidth: 0, // Border above the bottom tab, change the value and you can see grey color on top
          height: SPACING.space_10 * 10, // Height of each individual tab in the bar
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false, // Removes labels next to icons
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="video"
                  color={COLORS.White}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false, // Removes labels next to icons
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="search"
                  color={COLORS.White}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false, // Removes labels next to icons
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="ticket"
                  color={COLORS.White}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false, // Removes labels next to icons
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="user"
                  color={COLORS.White}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  contianer: {},
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
