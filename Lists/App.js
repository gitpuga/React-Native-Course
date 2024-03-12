import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  FlatList,
  SafeAreaView, 
  StatusBar,
  ItemSeparatorComponent
} from 'react-native';

import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {
          pokemonList.map(pokemon => {
            return (
              <View style={styles.card} key={pokemon.id}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
      <FlatList 
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card} key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        style={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={
          <View style={{ height: 16 }} />
        }
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <Text style={styles.listEmptyText}>
              No items found.
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderText}>
              Pokemon List
            </Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.listFooterContainer}>
            <Text style={styles.listFooterText}>
              End of list
            </Text>
          </View>
        }
        // horizontal
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },

  flatList: {
    paddingHorizontal: 16
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16
  },
  cardText: {
    fontSize: 30
  },

  listEmptyContainer: {
    alignItems: "center"
  },
  listEmptyText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  listHeaderContainer: {
    alignItems: "center",
    paddingVertical: 12
  },
  listHeaderText: {
    textAlign: "center",
    fontSize: 30,
  },

  listFooterContainer: {
    paddingVertical: 15,
    alignItems: "center"
  },
  listFooterText: {
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic"
  }
});
