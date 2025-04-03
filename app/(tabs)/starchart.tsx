import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import StarChartScreen from "@/components/StarchartHeader";

export default function ShowStarChart() {
  return (
    <View style={{ flex: 1 }}>
      <StarChartScreen />
    </View>
  );
}