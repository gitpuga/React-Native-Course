import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
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
