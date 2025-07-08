import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

export default function CatDetailScreen() {
  const { catId } = useLocalSearchParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/${catId}`);
        const catData = await response.json();
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cat Detail Screen</Text>
      <Image source={{ uri: data.url }} style={{ width: 200, height: 200 }} />
      <Text>{data.id}</Text>
    </View>
  );
}