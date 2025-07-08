import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import catsData from '../constants/data.json';

export default function CatDetailScreen() {
  const { catId } = useLocalSearchParams();
  const [data, setData] = useState(null as any);
  const [isUnreadable, setIsUnreadable] = useState(false);

  // Rainbow colors
  const rainbowColors = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
    '#0000FF', '#4B0082', '#9400D3', '#FF1493',
    '#00FFFF', '#FF69B4', '#32CD32', '#FFD700'
  ];

  const getRandomColor = () => {
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  };

  const getRandomTextStyle = () => ({
    color: getRandomColor(),
    opacity: isUnreadable ? Math.random() * 0.3 + 0.1 : Math.random() * 0.4 + 0.6,
    textShadowColor: getRandomColor(),
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: isUnreadable ? 15 : 3,
  });

  useEffect(() => {
    setIsUnreadable(Math.random() < 0.1);

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
    return <View><Text style={getRandomTextStyle()}>Loading...</Text></View>;
  }

  console.log('Cat ID:', catId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={[styles.title, getRandomTextStyle()]}>
        {data.name}
      </Text>

      <Image
        source={{ uri: data.url }}
        style={styles.image}
        resizeMode="contain"
      />

      {data.description && (
        <Text style={[styles.description, getRandomTextStyle()]}>
          {data.description}
        </Text>
      )}

      {data.details && (
        <View style={styles.detailsContainer}>
          <Text style={[styles.detailsTitle, getRandomTextStyle()]}>
            Cat Information
          </Text>

          <Text style={[styles.text, getRandomTextStyle()]}>
            <Text style={[styles.boldText, getRandomTextStyle()]}>Breed: </Text>
            {data.details.breed}
          </Text>

          <Text style={[styles.text, getRandomTextStyle()]}>
            <Text style={[styles.boldText, getRandomTextStyle()]}>Age: </Text>
            {data.details.age}
          </Text>

          <Text style={[styles.text, getRandomTextStyle()]}>
            <Text style={[styles.boldText, getRandomTextStyle()]}>Color: </Text>
            {data.details.color}
          </Text>
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
  },
  text: {
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
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});