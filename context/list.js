import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BackgroundColorContext } from './contextFile';

export default function List() {
  const { backgroundColor, changeBackgroundColor } = useContext(BackgroundColorContext);

  const handleColorChange = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    changeBackgroundColor(randomColor);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={styles.topic}>
        Click button to change background
      </Text>
      <Button
        title="Use context to Change Background"
        color="#3399ff"
        onPress={handleColorChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
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
