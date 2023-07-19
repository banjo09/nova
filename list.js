import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import axios from 'axios';
import { products } from './utils/product';
import { BackgroundColorContext } from './contextFile';
// import { BackgroundColorContext } from './BackgroundColorContext';

export default function List() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const { backgroundColor, changeBackgroundColor } = useContext(BackgroundColorContext);

  const options = {
    method: 'GET',
    url: 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword',
    params: {
      keyword: 'Lego Star Wars',
      page: '1',
      sortBy: 'best_match'
    },
    headers: {
      'X-RapidAPI-Key': 'da4ef9e0d6mshf471b6c91d61ba7p1dd3d2jsnef5aaf68e563',
      'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        // setData(response.data);
        // console.log('response.data', response.data)
      } catch (error) {
        console.error(error);
        setError(error)
      }
    };

    // fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setData(products);
    }, 2000);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.description}>{item.name}</Text>
      <Text style={styles.description}>{`Price: $${item.price}`}</Text>
    </View>
  );


  const handleColorChange = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    changeBackgroundColor(randomColor);
  };

  return (
    <View style={{ flex: 1, }}>
      <Button title="Change Background Color" color={backgroundColor} onPress={handleColorChange} />
      <Text style={styles.topic}>Products list</Text>
      <View>
        {data?.length > 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: 140,
    // width: '100%',
    height: 80,
    marginBottom: 5,
  },
  description: {
    flex: 1,
    fontSize: 16,
  },
  topic: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 20,
    marginBottom: 30
  },
});
