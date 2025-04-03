import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StellarAstronomyLesson = () => {
  const [lessonProgress, setLessonProgress] = useState(0); // To track user's progress
  
  const handleNext = () => {
    setLessonProgress(prevProgress => prevProgress + 1);
  };

  return (
    <View style={styles.container}>
      {/* Lesson Header */}
      <Text style={styles.lessonTitle}>Stellar Astronomy 🌟</Text>
      <Text style={styles.lessonDescription}>
        In this lesson, you will learn about stars, how they form, and their life cycle.
      </Text>
      
      {/* Progress Tracker */}
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${(lessonProgress / 3) * 100}%` }]} />
      </View>
      <Text style={styles.progressText}>
        {lessonProgress} of 3 steps completed
      </Text>

      {/* Learning Content */}
      {lessonProgress === 0 && (
        <View style={styles.lessonBlock}>
          <Text style={styles.blockTitle}>What are Stars?</Text>
          <Text style={styles.blockText}>
            Stars are massive balls of gas that emit light and heat. They are formed from clouds of gas and dust in space.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {lessonProgress === 1 && (
        <View style={styles.lessonBlock}>
          <Text style={styles.blockTitle}>How Stars Form</Text>
          <Text style={styles.blockText}>
            Stars begin as nebulae, where gravity causes the gas and dust to collapse and form a hot core, igniting nuclear fusion.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {lessonProgress === 2 && (
        <View style={styles.lessonBlock}>
          <Text style={styles.blockTitle}>The Life Cycle of Stars</Text>
          <Text style={styles.blockText}>
            Stars evolve based on their mass. Low-mass stars like the Sun turn into red giants, while high-mass stars explode as supernovae.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Completion Message */}
      {lessonProgress === 3 && (
        <View style={styles.lessonBlock}>
          <Text style={styles.blockTitle}>Lesson Completed!</Text>
          <Text style={styles.blockText}>You've completed the Stellar Astronomy lesson. Great job!</Text>
          <TouchableOpacity style={[styles.button, styles.completedButton]}>
            <Text style={styles.buttonText}>Take Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  lessonTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  lessonDescription: {
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: 'purple',
  },
  progressText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  lessonBlock: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  blockTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  blockText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  completedButton: {
    backgroundColor: 'gray',  // Grey button when lesson is completed
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default StellarAstronomyLesson;
