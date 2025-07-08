import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function AboutScreen() {

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.title}>🐱 Guardería de Gatitos</ThemedText>
          <ThemedText style={styles.subtitle}>
            &quot;Conectando corazones felinos con familias amorosas&quot;
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <View style={styles.iconHeader}>
            <IconSymbol name="chevron.right" size={32} color={'white'} />
            <ThemedText style={styles.sectionTitle}>Nuestra Misión</ThemedText>
          </View>
          <ThemedText style={styles.text}>
            Nos dedicamos a rescatar, cuidar y encontrar hogares amorosos para gatitos que necesitan una segunda oportunidad. Cada gatito en nuestra guardería recibe amor, cuidados veterinarios y la atención personalizada que merece.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <View style={styles.iconHeader}>
            <IconSymbol name="chevron.right" size={32} color={'white'} />
            <ThemedText style={styles.sectionTitle}>Adopción vs Tránsito</ThemedText>
          </View>
          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>En Adopción:</ThemedText> Gatitos listos para encontrar su hogar definitivo. Han completado todos sus cuidados veterinarios y están preparados para una nueva vida.
          </ThemedText>
          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>En Tránsito:</ThemedText> Gatitos que están en proceso de recuperación o esperando completar sus tratamientos antes de estar disponibles para adopción.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <View style={styles.iconHeader}>
            <IconSymbol name="chevron.right" size={32} color={'white'} />
            <ThemedText style={styles.sectionTitle}>Nuestros Cuidados</ThemedText>
          </View>
          <ThemedText style={styles.text}>
            Todos nuestros gatitos reciben:
          </ThemedText>
          <View style={styles.list}>
            <ThemedText style={styles.listItem}>• Atención veterinaria completa</ThemedText>
            <ThemedText style={styles.listItem}>• Vacunación según calendario</ThemedText>
            <ThemedText style={styles.listItem}>• Desparasitación</ThemedText>
            <ThemedText style={styles.listItem}>• Esterilización (cuando es apropiado)</ThemedText>
            <ThemedText style={styles.listItem}>• Socialización y amor</ThemedText>
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <View style={styles.iconHeader}>
            <IconSymbol name="chevron.right" size={32} color={'white'} />
            <ThemedText style={styles.sectionTitle}>Contacto</ThemedText>
          </View>
          <ThemedText style={styles.text}>
            ¿Interesado en adoptar o ayudar? Contáctanos:
          </ThemedText>
          <ThemedText style={styles.contactInfo}>
            📧 info@guarderiadegatitos.com
          </ThemedText>
          <ThemedText style={styles.contactInfo}>
            📱 +1 (555) 123-4567
          </ThemedText>
          <ThemedText style={styles.contactInfo}>
            📍 Calle de los Gatitos 123, Ciudad Felina
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>
            💖 Hecho con amor para nuestros amigos felinos
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginVertical: 12,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  iconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  footer: {
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
