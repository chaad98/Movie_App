import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigators/TabNavigator";
import { MovieDetailsScreen, SeatBookingScreen } from "./src/packages/screenPackages";

// Create a Stack Navigator using the createNativeStackNavigator function
const Stack = createNativeStackNavigator();

const App = () => {
  // Render the NavigationContainer component with the Stack Navigator as its child
  return(
    <NavigationContainer>
      {/* Configure the Stack Navigator with screenOptions to hide the header and set the default animation to 'default' */}
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        {/* Render the TabNavigator component as the first screen */}
        <Stack.Screen name='Tab' component={TabNavigator} options={{animation: 'default'}} />
        {/* Render the MovieDetailsScreen component as the second screen with a slide_from_right animation */}
        <Stack.Screen name='MovieDetails' component={MovieDetailsScreen} options={{animation: 'slide_from_right'}} />
        {/* Render the SeatBookingScreen component as the third screen with a slide_from_bottom animation */}
        <Stack.Screen name='SeatBoooking' component={SeatBookingScreen} options={{animation: 'slide_from_bottom'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;