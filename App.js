import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Header from './src/components/Header';
import Cotizacion from './src/components/Cotizacion';
import axios from 'axios';
const App = () => {
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [consultarApi, setConsultarApi] = useState(false);
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  // const getCoint = () => {
  //   const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
  //   axios(url).then(data => console.log(data));
  // };
  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarApi) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const response = await axios.get(url);
        setCargando(true);
        //ocultar el spinner
        setTimeout(() => {
          setResultado(response.data.DISPLAY[crypto][coin]);
          setConsultarApi(false);
          setCargando(false);
        }, 3000);
      }
    };
    cotizarCriptomoneda();
  }, [consultarApi]);

  // mostrar el spinner o el resultado
  const componente = cargando ? (
    <ActivityIndicator size="large" color="#5E49E2" />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <>
      <ScrollView style={styles.app}>
        <Header />
        <Image
          style={styles.image}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.container}>
          <Formulario
            coin={coin}
            crypto={crypto}
            setCoin={setCoin}
            setCrypto={setCrypto}
            setConsultarApi={setConsultarApi}
            // getOneCoint={getOneCoint}
          />
        </View>
        <View style={{marginTop: 40}}>{componente}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 50,
  },
});

export default App;
