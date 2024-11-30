import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Fracoes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={{ justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: "#bdd0f8" }]}
            onPress={() => navigation.navigate("AdicaoSubtracao")}
          >
            <Text style={[styles.cardText, { color: "#141414" }]}>+ -</Text>
          </TouchableOpacity>
          <Text style={[styles.cardText, { color: "#fafafa", padding: 16 }]}>
            Adição e Subtração
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: "#ff6f00" }]}
            onPress={() => navigation.navigate("AdicaoSubtracao")}
          >
            <Text style={[styles.cardText, { color: "#141414" }]}>*/</Text>
          </TouchableOpacity>
          <Text style={[styles.cardText, { color: "#fafafa", padding: 16 }]}>
            Multiplicação e divisão
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: "#bef39f" }]}
            onPress={() => navigation.navigate("AdicaoSubtracao")}
          >
            <Text style={[styles.cardText, { color: "#141414" }]}>^√</Text>
          </TouchableOpacity>
          <Text style={[styles.cardText, { color: "#fafafa", padding: 16 }]}>
            Potenciação e Radiciação
          </Text>
        </View>
      </View>
      <Footer navigation={navigation} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#141414",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 60,
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#888",
  },
  logo: {
    width: 40,
    height: 40,
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
  card: {
    padding: 27,
    width: 100,
    height: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
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

export default Fracoes;
