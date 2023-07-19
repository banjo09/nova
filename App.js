import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import List from './list';
import { BackgroundColorProvider } from './contextFile';

export default function App() {

  return (
    <BackgroundColorProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <List />
      </View>
    </BackgroundColorProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
