import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import List from './list';
import { BackgroundColorContext } from './contextFile';

export default function ContextContainer() {
  const { backgroundColor } = useContext(BackgroundColorContext);

  return (
    <>
      <StatusBar style="auto" />
      <View style={{ ...styles.container, backgroundColor }}>
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
