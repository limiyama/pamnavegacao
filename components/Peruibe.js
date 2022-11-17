import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Peruibe() {
  const [dados, setDados] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
        const req = await fetch(
            `https://api.hgbrasil.com/weather?woeid=456409&array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date&key=a1fd3a9c`
        );
        const json = await req.json();
        setDados(json.forecast);
    }

    request();

    setLoading(false)
}, []);

if (loading) {
    return (
        <ActivityIndicator size="large" color="#FFF" />
    )
}
else if (!loading) {
    return (
        <View>
            <View>
                <FlatList
                    data={dados}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.tempo}>
                                <Text style={styles.txtData}>Data: {item.date}</Text>
                                <Text style={styles.texto}>Mínima: {item.min} °C</Text>
                                <Text style={styles.texto}>Máxima: {item.max} °C</Text>
                                <Text style={styles.texto}>{item.description}</Text>
                            </View>
                        );
                    }}

                />
            </View>
        </View>
    );
}

}

const styles = StyleSheet.create({
  tempo:{
    backgroundColor: "#d2b7e5",
    height:'100%'
  },
  txtData:{
      marginTop: 15,
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      color: '#a663cc',
  },

  texto:{
      fontSize: 18,
      textAlign: "center",
      color: '#000',
  }
})