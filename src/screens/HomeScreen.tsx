import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/theme';

// defining the HomeScreen functional component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black,
  },
});

export default HomeScreen;
