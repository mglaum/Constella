import React from "react";
import { View , StyleSheet, Image } from "react-native";
import Svg from "react-native-svg";
import starry_background from '@/assets/images/starry_background.jpg';


const Quiz = () => {
  return (
    <View style={styles.container}>
      <Image source={starry_background} style={styles.backgroundPic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,

  },
  backgroundPic: {
    width: 450, 
    height: 950, 
    resizeMode: "cover", 
  }});

export default Quiz;