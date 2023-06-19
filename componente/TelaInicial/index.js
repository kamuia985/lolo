import React from "react";
import { ImageBackground, Text, estilo } from "react-native";
import estilos from "./estilos";
import imgcapa from "../../assets/capa.jpg";

export default function TelaInicial () {
  
  return (
    <ImageBackground
        style={estilos.container}
        source={imgcapa}
        blurRadius={10}
    >
        <Text>a</Text>
        <Text>b</Text>
    </ImageBackground>
  )
}
