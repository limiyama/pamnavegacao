import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
 return (
   <View style={styles.bloco}>
        <Text style={styles.texto}>Seja bem-vindo !</Text>

        <View>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Mongagua")}>
                <Text style={styles.txtBotao}>Mongaguá</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Itanhaem")}>
                <Text style={styles.txtBotao}>Itanhaém</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Santos")}>
                <Text style={styles.txtBotao}>Santos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("SP")}>
                <Text style={styles.txtBotao}>São Paulo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Peruibe")}>
                <Text style={styles.txtBotao}>Peruíbe</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    bloco:{
        marginTop:30
    },
    texto:{
        fontSize:30,
        textAlign:'center'
    },
    botao:{
        marginTop:20,
        backgroundColor:'#F7BBEE',
        width:'80%',
        marginLeft:'10%',
        padding: 8
    },
    txtBotao:{
        fontSize:20,
        color:'#000',
        textAlign:'center'
    }
})