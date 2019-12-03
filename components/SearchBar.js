import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchBar = ({term, onTermChange,onTermSumbit}) => {
  return (
    <View style={styles.background}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={()=>onTermSumbit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
