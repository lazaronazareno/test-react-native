import CatCard from '@/components/ui/CatCard';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}


export default function HomeScreen() {
  const [data, setData] = useState<CatImage[] | null>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate a network request
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('Fetched data:', responseData);
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <View></View>;
  }
  console.log('Data state:', data![0]);

  return (
    <ScrollView style={styles.titleContainer}>
      <CatCard item={data![0]} name='Luis' status='En Adopción' />
      <CatCard item={data![1]} name='Mia' status='Adoptada' />
      <CatCard item={data![2]} name='Luna' status='En Adopción' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    height: '100%',
    paddingVertical: 48,
  },
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
