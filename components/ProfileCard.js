import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PROFILE_DATA = {
    name: "O Courier",
    description: "Sobrevivente dos Ermos | Entregador no Mojave Express",
    avatar: "https://wallpapers.com/images/hd/fallout-nv-1920-x-1080-n7xb77fgx23730a5.jpg"
};

export default function ProfileCard() {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: PROFILE_DATA.avatar }}
                style={styles.image}
            />
            <Text style={styles.name}>{PROFILE_DATA.name}</Text>
            <Text style={styles.description}>
                {PROFILE_DATA.description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        marginBottom: 30,
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
        marginBottom: 6,
        color: "#00ff41",
    },
    description: {
        textAlign: "center",
        color: "#66ff66",
    },
});
