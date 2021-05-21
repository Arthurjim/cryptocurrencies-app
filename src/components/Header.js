import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

const Header = () => {
  return <Text style={styles.encabezado}>Cripto Moneadas </Text>;
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
    textTransform: 'uppercase',
  },
});

export default Header;
