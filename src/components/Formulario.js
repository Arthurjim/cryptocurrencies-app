import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
const Formulario = ({coin, crypto, setCoin, setCrypto, setConsultarApi}) => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const url =
          'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        setCryptos(resultado.data.Data);
      } catch (error) {
        console.log('Error en ', error);
      }
    };
    consultarAPI();
  }, []);

  const getCoin = moneda => {
    setCoin(moneda);
  };
  const getCrypto = moneda => {
    setCrypto(moneda);
  };
  const cotizarPrice = () => {
    if (coin === '' || crypto === '') {
      showAlert();
      return;
    }
    setConsultarApi(true);
    console.log('Cotizando....');
  };
  const showAlert = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        style={styles.pickeStyle}
        selectedValue={coin}
        onValueChange={moneda => getCoin(moneda)}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano " value="MXN" />
        <Picker.Item label="Euro " value="EUR" />
        <Picker.Item label="Libra Esterlina " value="GBP" />
      </Picker>
      <Text style={styles.label}>CriptoMonedas</Text>

      <Picker
        style={styles.pickeStyle}
        selectedValue={crypto}
        onValueChange={crypt => getCrypto(crypt)}>
        <Picker.Item label="- Seleccione -" value="" />
        {cryptos.map(item => (
          <Picker.Item
            key={item.CoinInfo.Id}
            label={item.CoinInfo.FullName}
            value={item.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        onPress={() => {
          cotizarPrice();
        }}
        style={styles.btnCotizar}>
        <Text style={styles.txtCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
    marginHorizontal: '2.5%',
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  txtCotizar: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  pickeStyle: {
    marginBottom: 25,
  },
});
export default Formulario;
