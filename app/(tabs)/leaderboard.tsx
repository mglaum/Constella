import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import UserList  from '@/components/UserList.js';
import StarChart from '@/components/StarChart.js';
import React from 'react';

export default function Leaderboard() {
  return (
    <View>
      <UserList />
    </View>
  );
}