import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Enheritance <Text style={styles.boldText}>in bold</Text>
        </Text>
      </View>
      <View style={[styles.Box, styles.lightblueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: "red" }}>
          lightblue box
        </Text>
      </View>
      <View style={[styles.Box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>
          lightgreen box
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  Box: {
    height: 250,
    width: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 2,
    borderColor: "purple",
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
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});