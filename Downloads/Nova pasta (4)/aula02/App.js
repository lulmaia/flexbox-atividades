import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileCard from "./components/ProfileCard";
import InteractiveProfileCard from "./components/InteractiveProfileCard";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <InteractiveProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
