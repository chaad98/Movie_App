import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../theme/theme';

// defining the HomeScreen functional component
const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* Render a TouchableOpacity component with an onPress function that navigates to the MovieDetails screen */}
      <TouchableOpacity onPress={() => {
        navigation.push('MovieDetails')
      }}>
        {/* Render a Text component with the text "Home Screen" */}
        <Text style={styles.container}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define the styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black
  },
});

// Export the HomeScreen component as the default export
export default HomeScreen;
