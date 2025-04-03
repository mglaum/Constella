import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import StellarAstronomyLesson from "@/components/StellarAstronomyLesson"; // Ensure this is the correct path to your Lessons component

export default function ShowStarChart() {
  return (
    <View style={{ flex: 1 }}>
      <StellarAstronomyLesson />
    </View>
  );
}