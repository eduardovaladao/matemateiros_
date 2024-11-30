import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AdicaoSubtracao = ({ navigation }) => {
  width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Adição e Subtração</Text>
        <Text style={styles.description}>
          Se os denominadores forem iguais, some ou subtraia os numeradores. Se
          forem diferentes, encontre o mínimo múltiplo comum (MMC), ajuste os
          numeradores e depois some ou subtraia.
        </Text>
        <Text style={styles.example}>2/3 + 1/3 = 3/3 = 1</Text>

        {/* Video Section */}
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={300}
            width={width-20}
            play={true}
            videoId={"j8Yi4qaLf5g"} // Substitua pelo ID do vídeo do YouTube
          />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExercioAdicaoSubtracao')}>
          <Text style={styles.buttonText}>Exercícios</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#888",
  },
  logo: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
  },
  backButton: {
    color: "#FFF",
    fontSize: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 7,
  },
  description: {
    fontSize: 18,
    color: "#CCC",
    marginBottom: 8,
  },
  example: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 16,
  },
  videoContainer: {
    alignItems: "center",
    marginBottom: 16,
  },

  button: {
    width: "60%",
    backgroundColor: "#8a2be2",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "right",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
  iconButton: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 24,
  },
  icon: {
    color: "#FFA500",
    fontSize: 18,
  },
  video: {
    height: 300, // Ajuste conforme necessário
    width: "100%",
  },
});

export default AdicaoSubtracao;
