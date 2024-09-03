import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio04 = ({ itens }) => {
  return (
    <View styles={styles.container}>
        {itens.map((item, index) => (
            <Text key={index} style={styles.itemText}>
                 {item}
            </Text>
        ))}      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    itemText: {
        fontSize:18,
        marginVertical: 5
    }
})

export default Exercicio04