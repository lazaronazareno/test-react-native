import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import catsData from '../constants/data.json';

export default function CatDetailScreen() {
  const { catId } = useLocalSearchParams();
  const [data, setData] = useState(null as any);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const catData = catsData.cats.find(cat => cat.id === catId);
        setData(catData);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    if (catId) {
      fetchCatData();
    }
  }, [catId]);

  if (!data) {
    return <View><Text>Loading...</Text></View>;
  }

  console.log('Cat ID:', catId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>
        {data.name}
      </Text>

      <Image
        source={{ uri: data.url }}
        style={styles.image}
        resizeMode="contain"
      />

      {data.description && (
        <Text style={styles.description}>
          {data.description}
        </Text>
      )}

      {data.details && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Detalles del Gatito
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>Raza: </Text>
            {data.details.breed}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>Edad: </Text>
            {data.details.age}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>Color: </Text>
            {data.details.color}
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => console.log('Adopt this cat!')}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Adoptar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  text: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 24,
    marginBottom: 15,
    fontStyle: 'italic',
    color: '#fff',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsTitle: {
    color: 'orange',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 24,
  },
});
