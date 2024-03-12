import {
  SafeAreaView,
  StatusBar,
  StyleSheet, 
  Text, 
  View,
  FlatList
} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [postList, setPostList] = useState([]);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList 
          data={postList}
          renderItem={({ item }) => {
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          }}
          ItemSeparatorComponent={
            <View
              style={{
                height: 16,
              }}
            />
          }
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Post List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24
  }
});
