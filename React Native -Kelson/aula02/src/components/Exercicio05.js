import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Exercicio05 = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Lista de Tarefas</Text>

      {/* Campo de entrada de tarefa */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          //placeholder="Digite uma nova tarefa"
          //placeholderTextColor="#777" // Cor do placeholder
        />
        <Button title="Adicionar" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0', // Cor de fundo mais clara
  },
  header: {
    fontSize: 32, // Tamanho maior para o cabeçalho
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black', // Texto escuro para visibilidade
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50, // Aumentar a altura para facilitar a digitação
    borderWidth: 2, // Borda mais grossa para visibilidade
    borderColor: '#333', // Cor escura na borda
    paddingHorizontal: 10, // Aumentar o padding horizontal
    marginRight: 1,
    borderRadius: 5,
    backgroundColor: '#fff', // Campo de entrada branco
    width: '100%', // Aumentar a largura para 80% da tela
  },
});

export default Exercicio05;
