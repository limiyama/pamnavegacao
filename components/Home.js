import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.bloco}>
      <Text style={styles.texto}>Home</Text>

      <View>
        <TouchableOpacity style={styles.botao}
        onPress={()=>navigation.navigate("Mongagua")}>
            <Text style={styles.txtBotao}> Cidades </Text>
        </TouchableOpacity>
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
