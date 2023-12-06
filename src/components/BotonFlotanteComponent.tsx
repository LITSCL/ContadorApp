import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
  titulo: string,
  posicion: "izquierda" | "derecha",
  accion: () => void
}

export const BotonFlotanteComponent: (props: Props) => JSX.Element = (props: Props) => {
  var titulo: string = props.titulo;
  var posicion: "izquierda" | "derecha" = props.posicion;
  var accion: () => void = props.accion;

  //JSX para Android.
  const android: () => JSX.Element = () => {
    return (
      <View 
        style={
          posicion == "izquierda" ? (
            styles.botonFlotantePosicionIzquierda
          ) : (
            styles.botonFlotantePosicionDerecha
          )
        }
      >
        <TouchableNativeFeedback
          onPress={accion}
          background={TouchableNativeFeedback.Ripple("#28425B", false, 30)}
        >
          <View style={styles.botonFlotante}>
            <Text style={styles.textoBotonFlotante}>{titulo}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  //JSX para IOS.
  const ios: () => JSX.Element = () => {
    return (
      <TouchableOpacity 
        style={
          posicion == "izquierda" ? (
            styles.botonFlotantePosicionIzquierda
          ) : (
            styles.botonFlotantePosicionDerecha
          )
        }
        activeOpacity={0.5}
        onPress={accion}
      >
        <View style={styles.botonFlotante}>
          <Text style={styles.textoBotonFlotante}>{titulo}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return Platform.OS == "android" ? (android()) : (ios()); //Retornando el JSX correspondiente al sistema operativo.
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  botonFlotantePosicionIzquierda: {
    position: "absolute",
    bottom: 25,
    left: 25
  },
  botonFlotantePosicionDerecha: {
    position: "absolute",
    bottom: 25,
    right: 25
  },
  botonFlotante: {
    width: 60,
    height: 60,
    backgroundColor: "#5856d6",
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 5
  },
  textoBotonFlotante: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});