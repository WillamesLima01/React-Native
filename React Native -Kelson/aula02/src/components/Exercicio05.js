import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const Exercicio05 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Limpar o campo após adicionar
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Lista de Tarefas</Text>

      {/* Campo de entrada de tarefa */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa"
          placeholderTextColor="#777" // Cor do placeholder
          value={task}
          onChangeText={setTask} // Atualiza o estado da tarefa
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>

      {/* Lista de Tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tarefa adicionada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0', 
  },
  header: {
    fontSize: 32, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black', 
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50, 
    borderWidth: 2,
    borderColor: '#333', 
    paddingHorizontal: 10, // Aumentar o padding horizontal
    marginRight: 10, // Adicionar margem entre o input e o botão
    borderRadius: 5,
    backgroundColor: '#fff', // Campo de entrada branco
  },
  taskItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 20,
  },
});

export default Exercicio05;
