import React, {useState} from 'react';
import {Text,StyleSheet, View} from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = props => {
  const [term, setTerm] = useState(' ');
  return (
    <View>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)}
      onTermSumbit={null} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
