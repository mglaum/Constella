import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const StarChart = () => {
  return (
    <View>
      <Svg height="400" width="400">
        <Circle cx="50" cy="50" r="5" fill="white" />
        <Circle cx="100" cy="80" r="4" fill="white" />
        <Circle cx="200" cy="120" r="6" fill="white" />
      </Svg>
    </View>
  );
};

export default StarChart;
