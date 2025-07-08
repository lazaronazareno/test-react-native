import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function CatCard({ item, name, status }: { item: any, name?: string, status?: string }) {
  console.log('Rendering item:', item);
  return (
    <View >
      <Image source={{ uri: item.url }} style={styles.reactLogo} />
      <Text style={styles.titulo}>{name}</Text>
      <View style={styles.estado}>
        <Text>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  estado: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
  },
  titulo: {
    color: 'white',
  }
});