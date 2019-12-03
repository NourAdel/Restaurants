import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';

import yelp from '../APIs/yelp';

const Result = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.name}>{result.name}</Text>
      <Text> Phone: {result.phone}</Text>
      <Text> Rating: {result.rating} Stars</Text>
      <Text>{result.review_count} Reviews</Text>
      <ScrollView>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}} />;
          }}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default Result;
