import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          resizeMode="cover"
        />
        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          <TouchableOpacity>
            <FontAwesome
              name="arrow-left"
              size={24}
              color="#fff"
              align="left"
            />
          </TouchableOpacity>
          <Text style={styles.backText}>Voltar</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'white' }}> </View>
      </View>
      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={{ color: '#ffffff' }}>Hora de praticar</Text>
          <Text style={{ color: '#ff6f00' }}>!</Text>
          <Text style={{ color: '#bef39f' }}>!</Text>
          <Text style={{ color: '#8423fb' }}>!</Text>
          <Text style={{ color: '#bdd0f8' }}>!</Text>
        </Text>
        <Text style={styles.questionTitle}>Questão 1:</Text>
        <Text style={styles.questionText}>Enunciado da questão</Text>
        <View style={styles.answerContainer}>
          <TouchableOpacity style={styles.answerBox}>
            <Text style={styles.answerText}>Resposta1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBox}>
            <Text style={styles.answerText}>Resposta2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBox}>
            <Text style={styles.answerText}>Resposta3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerBox}>
            <Text style={styles.answerText}>Resposta4</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de navegação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navIcon}>
          <FontAwesome name="plus" size={24} color="#FF6600" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <FontAwesome name="gear" size={24} color="#FF6600" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  header: {
    backgroundColor: '#141414',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10%',
    paddingTop: '17%'
  },
  logo: {
    width: 50,
    height: 50,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    //color: 'red',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  questionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Open Sans',
  },
  questionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  answerBox: {
    backgroundColor: '#8423fb',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
  },
  answerText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#141414',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navIcon: {
    alignItems: 'center',
  },
});

export default App;
