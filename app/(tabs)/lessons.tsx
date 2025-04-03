import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import Lessons from "@/components/Lessons"; // Ensure this is the correct path to your Lessons component

export default function ShowStarChart() {
  return (
    <View style={{ flex: 1 }}>
      <Lessons />
    </View>
  );
}