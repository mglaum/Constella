import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const InvitePage = () => {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [showFriends, setShowFriends] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const nearbyFriends = [
    { id: '1', name: 'Maddie' },
    { id: '2', name: 'Savannah' },
    { id: '3', name: 'Dunia' },
    { id: '4', name: 'Jeris' },
  ];

  const handleInvite = () => {
    setShowFriends(true);
  };

  const handleFriendSelect = (friend) => {
    if (selectedFriends.includes(friend)) {
      setSelectedFriends(selectedFriends.filter((f) => f !== friend));
    } else {
      setSelectedFriends([...selectedFriends, friend]);
    }
  };

  const handleCreateTrip = () => {
    alert('Trip Created');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan a Stargazing Trip</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter time"
          value={time}
          onChangeText={setTime}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date"
          value={date}
          onChangeText={setDate}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleInvite}>
        <Text style={styles.buttonText}>Invite Friends</Text>
      </TouchableOpacity>

      {showFriends && (
        <View style={styles.friendsListContainer}>
          <Text style={styles.label}>Select Friends to Invite (Searching within 20 mi of Gainesville):</Text>
          <FlatList
            data={nearbyFriends}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.friendItem}
                onPress={() => handleFriendSelect(item.name)}
              >
                <Text
                  style={[
                    styles.friendText,
                    selectedFriends.includes(item.name) && { color: 'green' },
                  ]}
                >
                  {item.name} {selectedFriends.includes(item.name)}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={handleCreateTrip}
      >
        <Text style={styles.buttonText}>Create Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 20,
    fontFamily: 'VarelaRound'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'VarelaRound', 
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontFamily: 'VarelaRound'
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'VarelaRound'
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'VarelaRound'
  },
  friendsListContainer: {
    marginTop: 20,
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 10,
  },
  friendItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  friendText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'VarelaRound'
  },
});

export default InvitePage;
