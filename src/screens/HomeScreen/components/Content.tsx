import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function Content() {
  return (
    <View style={styles.content}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          tintColor="#E5E5E5"
        />
        <Text style={styles.welcomeText}>
          Bonjour <Text style={styles.username}>John</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  welcomeContainer: {
    alignItems: "center",
    gap: 16,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 24,
    color: "#666",
  },
  username: {
    fontWeight: "600",
    color: "#333",
  },
});
