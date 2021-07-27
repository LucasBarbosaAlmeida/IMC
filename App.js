/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

    calcular(){

      let imc = this.state.massa/(this.state.altura * this.state.altura)

      let s = this.state
      s.resultado = imc
      this.setState(s)

    }

    render(){
      return(
        <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}></TextInput>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado}</Text>
        <Text style={[styles.resultado, {fontSize:30}]}>{this.state.resultadoText}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  entradas:{
    flexDirection:'row',
  },

  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:30,
  },

  button:{
    backgroundColor:"green"
  },

  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize:25,
    color:"black",
    fontWeight:'bold',
  },

  resultado:{
    alignSelf:"center",
    color:"gray",
    fontSize:40,
    padding:15,
  }

});