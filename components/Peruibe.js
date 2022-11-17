import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Api from './Api';


export default function Peruibe() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Peruibe')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description&key=a1fd3a9c&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  return (
    <View style={styles.container}>

      <View style={styles.bloco}>
        <TouchableOpacity
        style={styles.botao}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Procurar Previsão</Text>
        </TouchableOpacity>

      </View>
        <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tempo:{
      marginLeft: '10%',
      marginBottom: 10
    },
    bloco: {
      fontSize: 20,
    },
    input: {
      borderBottomWidth: 2,
      width: 265,
      height: 35,
      fontSize: 20,
      borderColor: '#F7BBEE'
    },
    botao: {
      width: 265,
      height: 45,
      backgroundColor: '#F7BBEE',
      alignItems: 'center',
      margin: 10,
      borderRadius: 5,
    },
    btnTexto: {
      fontSize: 30,
      color: '#000'
    }
  });