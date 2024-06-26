import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        value={searchText}
        onChangeText={textInput => setSearchText(textInput)}
        placeholder="Search your movies..."
        placeholderTextColor={COLORS.White}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <CustomIcon
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    // paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERADIUS.radius_25,
    flexDirection: 'row',
  },
  textInput: {
    width: '90%',
    fontFamily: FONTFAMILY.roboto_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.space_10,
  },
});
