import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const celestialBodies = [
  { id: 1, name: 'Mars', x: 150, y: 250, color: 'pink', size: 6, distance: 225 },
  { id: 2, name: 'Jupiter', x: 300, y: 200, color: 'pink', size: 4, distance: 778 },
  { id: 3, name: 'Venus', x: 100, y: 300, color: 'pink', size: 7, distance: 108 },
  { id: 4, name: 'Castor', x: 200, y: 100, color: 'white', size: 5, distance: 51 },
  { id: 5, name: 'Pollux', x: 220, y: 120, color: 'white', size: 5, distance: 34 },
  { id: 6, name: 'Procyon', x: 250, y: 150, color: 'white', size: 5, distance: 11 },
  { id: 7, name: 'Sirius', x: 270, y: 180, color: 'white', size: 5, distance: 8.6 },
  { id: 8, name: 'Betelgeuse', x: 180, y: 220, color: 'white', size: 4, distance: 642 },
  { id: 9, name: 'Rigel', x: 190, y: 240, color: 'white', size: 4, distance: 863 },
  { id: 10, name: 'Aldebaran', x: 160, y: 260, color: 'white', size: 5, distance: 65 },
  { id: 11, name: 'Capella', x: 140, y: 280, color: 'white', size: 5, distance: 42 },
  { id: 12, name: 'Spica', x: 310, y: 230, color: 'white', size: 4, distance: 250 },
];

const StarChart = () => {
  const [selectedBody, setSelectedBody] = useState(null);

  return (
    <View style={styles.container}>
      <Svg height="400" width="400" style={styles.starMap}>
        {celestialBodies.map((body) => (
          <Circle
            key={body.id}
            cx={body.x}
            cy={body.y}
            r={Math.max(3, 8 - body.distance / 200)}
            fill={body.color}
            onPress={() => setSelectedBody(body)}
          />
        ))}
      </Svg>

      <Modal visible={!!selectedBody} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.starName}>{selectedBody?.name}</Text>
            <Pressable onPress={() => setSelectedBody(null)}>
              <Text style={styles.closeButton}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  starMap: { backgroundColor: 'black' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  starName: { fontSize: 20, fontWeight: 'bold' },
  closeButton: { marginTop: 10, color: 'blue', textAlign: 'center' },
});

export default StarChart;
