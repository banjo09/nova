import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function List() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const options = {
    method: 'GET',
    url: 'https://opencollective.com/webpack/members.json',
    params: {
      limit: '10',
      offset: '0'
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setError('')
        setData(response.data);
        // console.log('response.data', response.data)
      } catch (error) {
        // console.log('error', error.message)
        setError(error.message)
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.description}>{item.name}</Text>
      <Text style={styles.description}>{`Price: $${item.totalAmountDonated}`}</Text>
    </View>
  );

  if (!!error) {
    return <View style={{ paddingTop: 50 }}>
      <Text>{error}</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Products list</Text>
      <View style={styles.listContainer}>
        {data?.length > 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.MemberId} ${item.createdAt}`}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: 140,
    overflow: 'hidden'
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  image: {
    width: 140,
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
    marginBottom: 30,
    paddingLeft: 20
  },
});
