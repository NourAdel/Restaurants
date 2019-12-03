import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import ResultDetails from './ResultDetails'

const ResultList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (<ResultDetails result={item}/>);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:5
  },
  container:{
      marginBottom:10
  }
});

export default ResultList;
