import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        paddingTop: 20,
      },
      ios: {
        paddingTop: 0,
      },
    }),
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
