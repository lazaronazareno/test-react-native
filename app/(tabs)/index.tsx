import CatCard from '@/components/ui/CatCard';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import catsData from '../../constants/data.json';

export default function HomeScreen() {
  const [data, setData] = useState(null as any[] | null);
  const [loading, setLoading] = useState(true);

  const handleCatPress = (id: number) => {
    router.push({
      pathname: '/cat-detail' as any,
      params: { catId: id }
    });
  };

  //https://api.thecatapi.com/v1/images/0XYvRd7oD

  useEffect(() => {
    // Load data from local JSON file
    const loadData = async () => {
      try {
        setLoading(true);
        console.log('Loaded data:', data);
        setData(catsData.cats);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <View></View>;
  }
  console.log('Data state:', data![0]);

  return (
    <ScrollView style={styles.titleContainer}>
      <Text style={styles.title}>🐱 Gatitos en Adopción</Text>
      {data?.map((item, index) => (
        <CatCard
          key={item.id}
          item={item}
          name={item.name || 'Gatito sin nombre'}
          status={index % 2 === 0 ? 'En Adopción' : 'Transito'}
          onPress={() => handleCatPress(item.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    gap: 8,
    width: '100%',
    height: '100%',
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 16,
  },
});
