import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const lessons = [
  { id: 1, title: 'Introduction to the Night Sky', description: 'Learn the basics of stargazing and constellations.', status: 'completed' },
  { id: 2, title: 'Phases of the Moon', description: 'Understand how the moon changes shape over time.', status: 'completed' },
  { id: 3, title: 'Stellar Astronomy', description: 'Explore stars and their formation, structure, and properties.', status: 'in-progress' },
  { id: 4, title: 'Deep Space Objects', description: 'Discover galaxies, nebulae, and other deep-space wonders.', status: 'available' },
  { id: 5, title: 'Using a Star Chart', description: 'Learn how to navigate the night sky using a star chart.', status: 'available' },
];

const Lessons = () => {
    const navigate = useNavigation();
    const handleNavigate = () => {
            navigate.navigate('stellarastrolesson'); 
    };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lessons 📚</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {lessons.map((lesson) => (
          <View 
            key={lesson.id} 
            style={[
              styles.card,
              lesson.status === 'completed' && styles.completedCard,
              lesson.status === 'in-progress' && styles.inProgressCard
            ]}
          >
            <Text style={styles.cardTitle}>{lesson.title}</Text>
            <Text style={styles.cardText}>{lesson.description}</Text>
            
            <TouchableOpacity 
              style={[
                styles.button,
                lesson.status === 'completed' && styles.completedButton
              ] } onPress={handleNavigate}
              disabled={lesson.status === 'completed'}
            >
              <Text style={styles.buttonText}>
              {lesson.status === 'completed' 
                  ? '✅ Completed!' 
                  : lesson.status === 'in-progress' 
                  ? 'Continue Lesson' 
                  : 'Start Lesson'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: 'VarelaRound',
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  completedCard: {
    backgroundColor: '#2a2a2a',  // Darker background for completed lessons
    opacity: 0.7,  // Slightly faded to show it's done
  },
  inProgressCard: {
    borderColor: 'blue',
    borderWidth: 2,  // Blue outline to indicate progress
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    fontFamily: 'VarelaRound',
  },
  cardText: {
    color: 'white',
    marginBottom: 10,
    fontFamily: 'VarelaRound',
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  completedButton: {
    backgroundColor: 'gray', // Greyed-out button for completed lessons
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'VarelaRound', 
  },
});

export default Lessons;
