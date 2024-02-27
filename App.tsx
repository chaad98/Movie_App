import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <View style={styles.container}>
      <Text>Movie App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;