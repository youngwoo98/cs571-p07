import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {

  const [sum, setSum] = useState(0);
  const [input, setInput] = useState(0);
  


  function addVal() {
    setSum(prev => prev + parseFloat(input))
    setInput(0)
  }

  function resetSum() {
    setSum(0);
    setInput(0)
  }

  return (
    <View style={styles.container}>
      <Text>Your total is {sum}</Text>
      <TextInput 
        id = "input"
        placeholder='Enter a Value'
        keyboardType= 'numbers-and-punctuation'
        value = {input}
        onChangeText={setInput}
        style = {{
          borderWidth : 1,
          width : 110,
          padding : 10
        }}
        >
      </TextInput>
      <Button
        onPress={addVal}
        title = 'ADD'
      />
      <Button
        onPress={() => {
          alert("Your total has been reset.")
          resetSum()
        }}
        title = 'RESET'
      />
      <StatusBar style="auto" />
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
