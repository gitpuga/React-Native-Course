import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", alignSelf: "flex-start"}}>Box 1</Box>
      <Box style={{ backgroundColor: "orange", alignSelf: "flex-end"}}>Box 2</Box>
      <Box style={{ backgroundColor: "brown", alignSelf: "center" }}>Box 3</Box>
      <Box style={{ backgroundColor: "green", alignSelf: "stretch" }}>Box 4</Box>
      <Box style={{ backgroundColor: "midnightblue", alignSelf: "auto" }}>Box 5</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 6</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 64,
    borderColor: "red",
    borderWidth: 6,
  },
});
