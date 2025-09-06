import React, { useState, useCallback } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CHARACTER_DATA = {
    name: "Raul Tejada",
    occupation: "Ghoul Mecânico",
    avatar: "https://static.wikia.nocookie.net/fallout/images/e/ef/Raul_Tejada.jpg/revision/latest?cb=20140812015257&path-prefix=pt",
    details: "Vaqueiro pré-guerra com mais de 200 anos de experiência, especialista em reparos e manutenção no Mojave Wasteland."
};

export default function InteractiveProfileCard() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = useCallback(() => {
        LayoutAnimation.easeInEaseOut();
        setExpanded(prev => !prev);
    }, []);

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: CHARACTER_DATA.avatar }}
                style={styles.image}
            />
            <Text style={styles.name}>{CHARACTER_DATA.name}</Text>
            <Text style={styles.occupation}>{CHARACTER_DATA.occupation}</Text>

            {expanded && (
                <Text style={styles.details}>
                    {CHARACTER_DATA.details}
                </Text>
            )}

            <TouchableOpacity style={styles.button} onPress={toggleExpand}>
                <Text style={styles.buttonText}>
                    {expanded ? "Ver Menos" : "Ver Mais"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        marginBottom: 20,
        width: "85%",
        borderWidth: 2,
        borderColor: "#00ff41",
        shadowColor: "#00ff41",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: "#00ff41",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00ff41",
    },
    occupation: {
        fontSize: 16,
        color: "#66ff66",
        marginBottom: 10,
    },
    details: {
        textAlign: "center",
        color: "#ccffcc",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#003300",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#00ff41",
    },
    buttonText: {
        color: "#00ff41",
        fontWeight: "bold",
    },
});
