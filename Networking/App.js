import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("")
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
      setError("Failed to fetch post list");
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20)
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        }),
      });
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setIsPosting(false);
      setError("");
    } catch (error) {
        console.error("Error adding new post", error);
        setError("Failed to add new post");
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : 
      ( <>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Post title"
          value={postTitle}
          onChangeText={setPostTitle}
        />
        <TextInput 
          style={styles.input}
          placeholder="Post body"
          value={postBody}
          onChangeText={setPostBody}
        />
      </View>
      <Button
        title={isPosting ? "Adding..." : "Add Post"}
        onPress={addPost}
        disabled={isPosting}
      />
      <View style={styles.listContainer}>
        <FlatList 
          data={postList}
          renderItem={({ item }) => { 
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
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
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
      </> )}
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
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16
  },
  errorContainer: {
    backgroundColor: "#ffc0cb",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center"
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8
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
    fontSize: 24,
    color: "#666666"
  },
  errorText: {
    color: "#d8000c",
    fontSize: 16,
    textAlign: "center"
  }
});
