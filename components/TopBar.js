import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => (
  <View style={styles.topBar}>
    <Text style={styles.topBarText}>Constella</Text>
  </View>
);

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 30, // You can adjust the height
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,  // Make sure it stays on top
  },
  topBarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopBar;
