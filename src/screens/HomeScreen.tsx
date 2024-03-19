import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../theme/theme';
import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from '../api/apiCalls';

const {width, height} = Dimensions.get('window');

// defining the HomeScreen functional component
const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<
    string | null
  >(null);
  const [popularMoviesList, setPopularMoviesList] = useState<string | null>(
    null,
  );
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<string | null>(
    null,
  );

  if (nowPlayingMoviesList) {
  }

  return <View style={styles.container}></View>;
};

// Define the styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Orange,
  },
});

// Export the HomeScreen component as the default export
export default HomeScreen;
