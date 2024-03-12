import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}>Box 1</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 2</Box>
      <Box style={{ backgroundColor: "brown" }}>Box 3</Box>
      <Box style={{ backgroundColor: "green" }}>Box 4</Box>
      <Box style={{ backgroundColor: "midnightblue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 6</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderColor: "red",
    borderWidth: 6,
  },
});
