import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { BotonFlotanteComponent } from '../components/BotonFlotanteComponent';

export const ContadorScreen: () => JSX.Element = () => {
  var [contador, setContador] = useState<number>(10);

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>
        Contador: {contador}
      </Text>

      <BotonFlotanteComponent titulo="-1" posicion="izquierda" accion={() => setContador(contador - 1)}></BotonFlotanteComponent>
      <BotonFlotanteComponent titulo="+1" posicion="derecha" accion={() => setContador(contador + 1)}></BotonFlotanteComponent>
      
    </View>
  )
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center"
  }, 
  titulo: {
    textAlign: "center",
    fontSize: 40
  }
});
