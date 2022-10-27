import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Mongagua() {
  return (
    <View>
      <Text>Bem vindo</Text>

      <View>
        <Text> Mongaguá</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    marginTop:30
  },
  texto: {
    fontSize: 30
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#000',
    width: '80%',
    marginLeft: '10%',
  },
  txtBotao: {
    fontSize:20,
    color: '#fff',
    textAlign: 'center'
  }
});
