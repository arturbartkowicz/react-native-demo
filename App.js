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
        onPress={() => {
          setIsBtnActive(!isBtnActive);
        }}>
        <Text style={styles.text}>{isBtnActive ? "Active" : "Disabled"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCD00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#F27B08',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
