import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [isBtnActive, setIsBtnActive] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{ isBtnActive ? 'Well-being button' : 'Btn was clicked' }</Text>
      <StatusBar style="auto" />
      <Pressable 
        style={styles.button} 
        onPress={() => {setIsBtnActive(!isBtnActive)}}
      >
        <Text style={styles.buttonText}>{isBtnActive ? "Acive" : "Disable"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#F27B08',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 4,
    width: 160,
    textAlign: 'center',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F27B08',
    borderRadius: 80/2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
