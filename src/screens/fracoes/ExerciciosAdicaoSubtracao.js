import { View, Text, FlatList, StyleSheet} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getExercicios } from "../../api/dados";
import { useState, useEffect } from "react";

import CardQuestion from "../../components/CardQuestion";

export default function ExerciciosAdicaoSubtracao({ navigation }) {
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    // Simulando consulta ao servidor para obter os exercícios
    const fetchedExercicios = getExercicios().map((exercicio) => ({
      ...exercicio,
      feito: false,
      acertou: null,
    }));
    setExercicios(fetchedExercicios);
    // setQtdeExercicios(fetchedExercicios.length);     -- Precisa do login
  }, []);

  const handlePress = (resposta, item) => {
    if (resposta.correta === true) {
      setExercicios((prevExercicios) => {
        const updatedExercicios = prevExercicios.map((exercicio) =>
          exercicio.id === item.id
            ? { ...exercicio, acertou: true, feito: true }
            : exercicio
        );
        return updatedExercicios;
      });
      return item.feedback.mensagens.acerto;
    } else {
      setExercicios((prevExercicios) => {
        const updatedExercicios = prevExercicios.map((exercicio) =>
          exercicio.id === item.id
            ? { ...exercicio, acertou: false, feito: true }
            : exercicio
        );
        contaExerciciosFeitos(updatedExercicios);
        return updatedExercicios;
      });
      return item.feedback.mensagens.erro;
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Text style={styles.title}>
        <Text style={{ color: '#ffffff' }}>Hora de praticar</Text>
        <Text style={{ color: '#ff6f00' }}>!</Text>
        <Text style={{ color: '#bef39f' }}>!</Text>
        <Text style={{ color: '#8423fb' }}>!</Text>
        <Text style={{ color: '#bdd0f8' }}>!</Text>
      </Text>

      {/*Lista de exercícios */}
      <FlatList
        data={exercicios}
        renderItem={({ item, index }) => (
          <CardQuestion
            handlePress={handlePress}
            item={item}
            index={index}
            total={10}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        horizontal
        snapToAlignment="center" // Alinha o centro do item com o centro da tela
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }} // Centraliza os itens dentro do FlatList
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 40 }} />} // Adiciona um separador entre os itens
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    justifyContent: "space-around",
  },

  title: {
    //color: 'red',
    fontSize: 20,
    marginTop: 100,
    marginBottom: 20,
    textAlign: "center",
  },
});
