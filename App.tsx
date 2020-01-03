import React from 'react';
import { StyleSheet, Text, View, Button, Clipboard } from 'react-native';

export default function App() {
  const setClipboard = async () => {
    await Clipboard.setString('sicko mode!');
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Copy" onPress={setClipboard}>Copyrsrsrs</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
