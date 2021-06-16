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
        <Text style={styles.text}>{isBtnActive ? "Active" : "Disabled"}</Text>
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
    elevation: 8,
    backgroundColor: '#FFCD00',
    marginTop: 12,
    width: 70,
    height: 70,
    padding: 70,
    borderRadius: 50,

  },
  text: {
    // display: 'flex',
    // width: '100%',
    // height: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
