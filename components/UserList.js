import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const starry_background = require("@/assets/images/starry_background.jpg");
const { width, height } = Dimensions.get("window");

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      setUsers(users);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={starry_background} style={styles.backgroundPic}>
        <View style={styles.overlay}>
          <Text style={styles.title}>User Leaderboard</Text>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.userCard}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.points}>{item.points} Point(s)</Text>
              </View>
            )}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundPic: { width, height, resizeMode: "cover" },
  overlay: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: "#6423a1",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  points: {
    fontSize: 16,
    color: "#FFD700",
    marginTop: 5,
  },
  listContent: {
    paddingBottom: 30,
  },
});

export default UserList;