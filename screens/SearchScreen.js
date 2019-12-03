import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../APIs/yelp';

const SearchScreen = props => {
  const [term, setTerm] = useState(' ');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(' ');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'Cairo',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSumbit={searchApi}
      />
      <Text>we have found {results.length} results</Text>
      <Text>{error}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
