import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        autoCorrect={false}
        autoCapitalize="none"
        // secureTextEntry
        // keyboardType=""
      />
      <TextInput 
        style={[styles.input, styles.multilineText]}
        placeholder="message"
        multiline
      />
      <Text style={styles.text}>My name is {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center"
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top"
  }
});
