import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';

const Exercicio03 = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Digite algo aqui..."
                style={styles.input}
            />
            {/* O texto deve ser renderizado corretamente */}
            <Text style={styles.outputText}>Você digitou: {text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        marginTop: 40,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '80%',
        alignSelf: 'center',
    },
    outputText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'blue', // Adiciona cor ao texto para garantir que seja visível
    },
});

export default Exercicio03;
