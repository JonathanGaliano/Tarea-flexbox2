import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './component/button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button  text="Boton 1"/>
        <View style={{ flex: 1 }} />
        <Button text="Boton 2" />
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.row}>

        <Button  text="Boton 3 "  />
        <View style={{ flex: 1 }} />
        <Button  text="Boton 4 " />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#685378",
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
    height:"10%",
    marginBottom: -10,
    marginVertical: 15,
    marginLeft:10,
    alignContent:"center"
    
  },
});
