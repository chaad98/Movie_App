import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SearchScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation?.navigate('SeatBooking')}>
        <Text>Search Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
