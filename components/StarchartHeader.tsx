import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import StarChart from "./StarChart";

const StarChartScreen = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>
        Stars Above Gainesville, Florida at {currentTime}
      </Text>
      <View style={styles.starChart}>
        <StarChart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  header: {
    fontSize: 18,
    fontFamily: "VarelaRound", 
    color: "white",
    marginBottom: 10,
  },
  starChart: {
    width: "100%",
    height: "80%", 
  },
});

export default StarChartScreen;
