App.js
import { View, Text } from 'react-native'
import React from 'react'
import Exercicio04 from './src/components/Exercicio04'

const App = () => {

  const itens = ['Arroz', 'Feijão', 'macarrão', 'Pizza'];

  return (
    <View>
      {/* <Exercicio01 nome="willames" />*/}
      {/* <Exercicio02" />*/}
       {/* <Exercicio03" />*/}
      <Exercicio04 itens={itens} />
    </View>
  )
}
export default App

exercicio01
import { View, Text } from 'react-native'
import React from 'react'

const Exercicio01 = ({ nome }) => {
  return (
    <View>
      <Text>Olá, bem vindo {nome}</Text>
    </View>
  )
}

export default Exercicio01

exercicio02
import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exercicio02 = () => {

    const [contador, setContador] = useState(0);

    function incrementar () {
        setContador(contador + 1);
    }

    function decrementar () {
        setContador(contador - 2);
    }

  return (
    <View style={styles.container}>
        <Button title='incrementar' onPress={incrementar} />        
        <text>O contador está em: {contador}</text>
        <Button title='decrementar' onPress={decrementar} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
});   

export default Exercicio02

exercicio03
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio03 = () => {

    const [text, setText] = useState('')

  return (
    <View styles={SVGAnimatedNumberList.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Digite algo aqui..."        
      />
      <Text>Você digitou: {text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio03

exercicio04
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
