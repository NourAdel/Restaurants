import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSumbit={() => searchApi(term)}
      />
      <Text>we have found {results.length} results</Text>
      <Text>{error}</Text>
      <ResultList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultList title="Big Spender" results={filterResultsByPrice('$$$')} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
