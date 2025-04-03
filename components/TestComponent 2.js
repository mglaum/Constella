import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { Asset } from "expo-asset";

export default function TestWebView() {
  const localHtmlUri = Asset.fromModule(require("../assets/hello.html")).uri;
  console.log("Local HTML URI:", localHtmlUri);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: localHtmlUri }}
        style={{ flex: 1, backgroundColor: "#222" }}
        javaScriptEnabled={true}
        onLoad={() => console.log("WebView loaded successfully")}
        onError={(e) => console.error("WebView error:", e.nativeEvent)}
      />
    </View>
  );
}
