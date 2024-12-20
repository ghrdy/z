import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/colors";

export function Content() {
  return (
    <View style={styles.content}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="run-fast"
          size={80}
          color={COLORS.primary}
        />
        <Text style={styles.appName}>Unify</Text>
        <Text style={styles.welcomeText}>
          Bienvenue, <Text style={styles.username}>John</Text>
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
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 24,
    color: COLORS.textLight,
  },
  username: {
    fontWeight: "600",
    color: COLORS.text,
  },
});
