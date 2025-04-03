import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import StarMap from "@/components/RenderStarchart";
import StarChart from "@/components/StarChart";
// import RenderStarchart 
import TestWebView from "@/components/TestComponent"; // Fallback for testing in Expo Go
import StarChartScreen from "@/components/StarchartHeader";

export default function ShowStarChart() {
  return (
    <View style={{ flex: 1 }}>
      <StarChartScreen />
      {/* <StarChart /> */}
      {/* <TestWebView/> */}
      {/* <StarMap/> */}
      {/* <RenderStarchart /> */}
    </View>
  );
}