import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="cover"
        style={styles.logo}
      />
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    position: "absolute",
    top: 0,
    backgroundColor: "#141414",
  },
  logo: {
    width: 80,
    height: 80,
    position: "absolute",
    zIndex: 999,
    left: 40,
    top: 40,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  backText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
