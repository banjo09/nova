import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import List from './list';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <List />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
