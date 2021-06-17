import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [isBtnActive, setIsBtnActive] = useState(true);
  const [data, setData] = useState([]);

  const test = () => {
    return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => setData(json.movies))
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <View style={styles.container}>
      {console.log(data)}
      <Text style={styles.header}>{ isBtnActive ? 'Well-being button' : 'Clicked Button' }</Text>
      <StatusBar style="auto" />
      <Pressable 
        style={isBtnActive ? [styles.button, styles.red] : [styles.button, styles.blue]} 
        onPress={() => {
          setIsBtnActive(!isBtnActive);
          test();
        }}>
        <Text style={styles.buttonText}>{isBtnActive ? "Acive" : "Disable"}</Text>
      </Pressable>
      <Button onPress={test} title={'Click me'} style={styles.margin}/>
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
    borderRadius: 80/2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: '#F27B08',
  },
  blue: {
    backgroundColor: '#FFCD00',
  },
  margin: {
    marginTop: 20,
  },
});
