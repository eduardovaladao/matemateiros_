import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Image
          source={require("../assets/simbolos.png")}
          style={styles.footerIcon}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Image
          source={require("../assets/engrenagem.png")}
          style={styles.footerIcon}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fafafa",
    position: "absolute",
    bottom: 0,
  },
  footerButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  footerIcon: {
    fontSize: 24,
  },
});
