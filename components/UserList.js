import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data.json"; // Import the mock data

const UserList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Leaderboard</Text>
      <FlatList
        data={data.users} // Use the mock user data
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} Points</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  userCard: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    color: "#fff",
  },
  points: {
    fontSize: 16,
    color: "#FFD700",
  },
});

export default UserList;
