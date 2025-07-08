import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CatCard({ item, name, status, onPress }: { item: any, name?: string, status?: string, onPress?: (item: any) => void }) {
  console.log('Rendering item:', item);
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{ uri: item.url }} style={styles.reactLogo} />
      <Text style={styles.titulo}>{name}</Text>
      <View style={styles.estado}>
        <Text>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 300,
    borderRadius: 8,
    padding: 16,
    gap: 8,
  },
  estado: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  reactLogo: {
    height: 178,
    width: 200,
  },
  titulo: {
    color: 'white',
  }
});