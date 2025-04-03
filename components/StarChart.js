import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

// Hardcoded stars and planets with approximate positions and distances
const celestialBodies = [
  { id: 1, name: 'Mars', x: 150, y: 250, color: 'lightblue', size: 6, distance: 225, description: 'The Red Planet, known for its iron-rich dust and potential for past life.' },
  { id: 2, name: 'Jupiter', x: 300, y: 200, color: 'lightblue', size: 4, distance: 778, description: 'The largest planet in our solar system, famous for its Great Red Spot.' },
  { id: 3, name: 'Venus', x: 100, y: 300, color: 'lightblue', size: 7, distance: 108, description: 'The hottest planet, covered in thick clouds of sulfuric acid.' },
  { id: 4, name: 'Castor', x: 200, y: 100, color: 'white', size: 5, distance: 51, description: 'A bright multiple star system in the Gemini constellation.' },
  { id: 5, name: 'Pollux', x: 220, y: 120, color: 'white', size: 5, distance: 34, description: 'An orange giant star, the brightest in the Gemini constellation.' },
  { id: 6, name: 'Procyon', x: 250, y: 150, color: 'white', size: 5, distance: 11, description: 'The eighth-brightest star in the night sky, part of Canis Minor.' },
  { id: 7, name: 'Sirius', x: 270, y: 180, color: 'white', size: 5, distance: 8.6, description: 'The brightest star in the night sky, also known as the Dog Star.' },
  { id: 8, name: 'Betelgeuse', x: 180, y: 220, color: 'white', size: 4, distance: 642, description: 'A red supergiant in Orion, known for its potential to go supernova.' },
  { id: 9, name: 'Rigel', x: 190, y: 240, color: 'white', size: 4, distance: 863, description: 'A blue supergiant, the brightest star in Orion.' },
  { id: 10, name: 'Aldebaran', x: 160, y: 260, color: 'white', size: 5, distance: 65, description: 'A red giant marking the eye of Taurus the Bull.' },
  { id: 11, name: 'Capella', x: 140, y: 280, color: 'white', size: 5, distance: 42, description: 'The brightest star in Auriga, actually a pair of giant stars.' },
  { id: 12, name: 'Spica', x: 310, y: 230, color: 'white', size: 4, distance: 250, description: 'A blue giant and the brightest star in Virgo.' },
  { id: 13, name: 'Saturn', x: 350, y: 180, color: 'lightblue', size: 3, description: 'The ringed planet, famous for its extensive and beautiful ring system.' },
  { id: 14, name: 'Uranus', x: 400, y: 150, color: 'lightblue', size: 2, description: 'An ice giant that rotates on its side, giving it unique seasons.' },
  { id: 15, name: 'Neptune', x: 450, y: 120, color: 'lightblue', size: 2, description: 'The farthest known planet, known for its deep blue color and strong winds.' },
  { id: 16, name: 'Regulus', x: 500, y: 100, color: 'white', size: 5, description: 'A bright star in Leo, part of a multi-star system.' },
  { id: 17, name: 'Arcturus', x: 550, y: 80, color: 'white', size: 6, description: 'An orange giant, one of the brightest stars in the sky.' },
  { id: 18, name: 'Vega', x: 600, y: 60, color: 'white', size: 6, description: 'A bright blue-white star, part of the Summer Triangle.' },
  { id: 19, name: 'Altair', x: 650, y: 40, color: 'white', size: 5, description: 'A fast-rotating star in the Aquila constellation.' },
  { id: 20, name: 'Deneb', x: 700, y: 20, color: 'white', size: 5, description: 'A distant but extremely luminous star in the Cygnus constellation.' },
  { id: 21, name: 'Antares', x: 750, y: 10, color: 'white', size: 6, description: 'A red supergiant in Scorpius, often compared to Mars.' },
  { id: 22, name: 'Fomalhaut', x: 800, y: 5, color: 'white', size: 5, description: 'A bright star surrounded by a dusty debris disk.' },
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

      {/* Modal for Star Info */}
      <Modal visible={!!selectedBody} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.starName}>{selectedBody?.name}</Text>
            <Text>{selectedBody?.description}</Text>
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
  