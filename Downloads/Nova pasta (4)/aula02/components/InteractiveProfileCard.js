import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function InteractiveProfileCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=150&h=150&fit=crop&crop=face" }}
        style={styles.image}
      />
      <Text style={styles.name}>Courier Six</Text>
      <Text style={styles.occupation}>Wasteland Wanderer</Text>

      {expanded && (
        <Text style={styles.details}>
          Sobrevivente do Mojave com experiência em diplomacia e combate.
        </Text>
      )}

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.buttonText}>
          {expanded ? "Ver Menos" : "Ver Mais"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "85%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  occupation: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  details: {
    textAlign: "center",
    color: "#444",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
