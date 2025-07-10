import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CatCard({ item, name, status, onPress }: { item: any, name?: string, status?: string, onPress?: (item: any) => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer} >
      <Image source={{ uri: item.url }} style={styles.reactLogo} contentFit="fill" />
      <Text style={styles.titulo}>{name}</Text>
      <View style={[styles.estado, { backgroundColor: status === 'Transito' ? '#FF9800' : status === 'En Adopción' ? '#4CAF50' : '#4CAF50' }]}>
        <Text style={{ textAlign: "center" }}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 300,
    borderRadius: 16,
    padding: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    marginBottom: 24,
  },
  estado: {
    padding: 8,
    borderRadius: 12,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100,
    textAlign: 'center',
  },
  reactLogo: {
    objectFit: 'fill',
    height: 178,
    width: "auto",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }
});