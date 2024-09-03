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