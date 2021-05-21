import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Cotizacion = ({resultado}) => {
  console.log(resultado);
  if (Object.keys(resultado).length === 0) return null;
  return (
    <View style={styles.resultado}>
      <Text style={[styles.text, styles.precio]}>
        <Text style={styles.span}> {resultado.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>
        Precio más alto del día:{' '}
        <Text style={styles.span}> {resultado.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        Precio más bajo del día:{' '}
        <Text style={styles.span}> {resultado.LOWDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Variación las últimas 24 horas:{' '}
        <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} %</Text>
      </Text>

      <Text style={styles.texto}>
        Última actualización:{' '}
        <Text style={styles.span}> {resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    padding: 23,
  },
  texto: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
    color: '#FFF',
  },
  precio: {
    color: '#FFF',

    fontSize: 30,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});
export default Cotizacion;
