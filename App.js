import React from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'


export default class App extends React.Component {

  state = {
    imc: 0,
    peso: 0,
    altura: 0,
    resultado: 'Aguardando informações...',
  }

  constructor(props){
    super(props)
    this.calcIMC = this.calcIMC.bind(this)
    this.render = this.render.bind(this)
  }

  render(){
    return (
      <View style= {styles.container}>
        <Text style={styles.title}>Peso: {this.state.peso}kg</Text>
        <TextInput
          keyboardType="decimal-pad"
          placeholder="Digite o seu peso"
          onChangeText={(text)=> this.setState({peso: text}, this.calcIMC)}
        />
        <Text style={styles.title}>Altura: {this.state.altura}m</Text>
        <TextInput 
          keyboardType="decimal-pad"
          placeholder="Digite a sua altura"
          onChangeText={(text)=> this.setState({altura: text}, this.calcIMC)}
        />
        <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    )
  }

  calcIMC(){
    const altura = this.state.altura
    const peso = this.state.peso
    if(altura > 0 && peso > 0){
      const imc = Math.round(peso / (altura * altura) * 100) / 100
      let info = ''
      if( imc < 17  ){
        info = 'Seu índice IMC está extremamente baixo!'
      }else if( imc >= 17 && imc <= 18.4){
        info = 'Seu índice IMC está baixo'
      }else if( imc >= 18.5 && imc <= 24.9 ){
        info = 'Excelente resultado, índice IMC perfeito'
      }else if( imc > 24.9 ){
        info = 'Lamento informar, mas você está acima do peso'
      }
      this.setState({resultado: 'IMC '+ imc + 'kg/m²' + ' '+ info})
    }else{
      this.setState({resultado: 'Aguardando informações...'})
    }
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    padding: 10
  },
  resultado: {
    fontSize: 19,
    fontWeight: 'bold',
    padding: 20,
    margin: 40,
    color: 'white',
    backgroundColor: 'blue',
    backgroundRadius: 20
  }
})
