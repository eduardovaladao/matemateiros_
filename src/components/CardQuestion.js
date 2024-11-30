import { View, Text, StyleSheet, TouchableOpacity, Dimensions  } from "react-native";

const getDifficultyColor = (level) => {
  switch (level) {
    case "facil":
      return "#4CAF50"; // Green
    case "medio":
      return "#FFEB3B"; // Yellow
    case "dificil":
      return "#F44336"; // Red
    default:
      return "#000"; // Default black
  }
};

/*
    handlePress -> guarda uma função quemexe com o item quando é respondido
    item -> objeto a ser analizado a partir de um vetor
    index -> a posição do item no vetor
    total -> total de exercícios 
*/

export default function CardQuestion({ handlePress, item, index, total }) {
  return (
    <View
      style={[
        styles.fullScreenItemContainer,
        /* { backgroundColor: item.feito ? "#bbb" : "#fff" }, */
      ]}>
      <View
        style={[
          styles.difficultyCircle,
          { backgroundColor: getDifficultyColor(item.nivel_dificuldade) },
        ]}>
        <Text style={styles.difficultyText}>{item.nivel_dificuldade}</Text>
        <Text style={styles.highlightedQuestion}>{item.pergunta}</Text>
        <View style={styles.optionsContainer}>
        {item.respostas.map((resposta, index) => (
          <TouchableOpacity
            style={styles.answerBox}
            key={index}
            onPress={() => Alert.alert(handlePress(resposta, item))}>
            <Text style={styles.optionText}>{resposta.texto}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenItemContainer: {
    width: Dimensions.get("window").width - 40, // Ajuste para evitar extrapolação
    height: Dimensions.get("window").height - 240, // Ajuste para evitar extrapolação
    backgroundColor: "#fff",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  difficultyCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  difficultyText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  highlightedQuestion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#ffeb3b',
    padding: 10,
    borderRadius: 5,
  },
  answerBox: {
    width: 70,
    padding: 16
  },
  optionText: {
    color: '#fafafa',
    fontSize: 16,
  }
});
