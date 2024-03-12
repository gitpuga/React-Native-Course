import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.Box, styles.lightblueBg]}>
        <Text>lightblue box</Text>
      </View>
      <View style={[styles.Box, styles.lightgreenBg]}>
        <Text>lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    height: 100,
    width: 100,
    padding: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "dotted",
    borderRadius: 5,
  },
  container: { 
    flex: 1, 
    backgroundColor: "plum", 
    padding: 60,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  }
});