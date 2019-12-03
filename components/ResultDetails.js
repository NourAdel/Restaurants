import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultDetails = ({result}) => {
  const renderImage = src => {
    if (src !== '') {
      return <Image style={styles.image} source={{uri: src}} />;
    } else {
      return (
        <Image
          style={styles.image}
          source={require('../assets/placeHolder.png')}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      {renderImage(result.image_url)}
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});
export default ResultDetails;
