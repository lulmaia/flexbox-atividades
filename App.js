import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ProfileCard from "./components/ProfileCard";
import InteractiveProfileCard from "./components/InteractiveProfileCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <ProfileCard />
        <InteractiveProfileCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});
