import React from "react";
import { ImageBackground, Text } from "react-native";
import {View, ScrollView, FlatList} from 'react-native';
import imgcapa from "../../assets/capa.jpg"
import estilo from './estilos';
import Cardvinho from './cardvinho';
import dados from'./dados';





export default function TelaCatalogo(props) {
  const vinhos = [
    {
      id:"1",
      imagem: require("../../assets/vinho-branco.jpg"),
      modelo: "Adidas Coreracer Masculino",
      valor: "R$ 179,99",
      descricao: "Na esteira ou pelas ruas, domine a corrida com o novo Tênis Feminino da Adidas. O Runfalcon 3.0 chega com um cabedal com tripla camada de mesh para ainda mais respirabilidade, calcanhar acolchoado para máximo conforto e suporte, além de uma entressola em EVA para amortecimento leve e passada mais suave. "
    },
    {
      id:"2",
      imagem: require("../../assets/vinho-especial.jpg"),
      modelo: "Adidas Breaknet Masculino",
      valor:  "R$ 208,99",
      descricao: "Na esteira ou pelas ruas, domine a corrida com o novo Tênis Feminino da Adidas. O Runfalcon 3.0 chega com um cabedal com tripla camada de mesh para ainda mais respirabilidade, calcanhar acolchoado para máximo conforto e suporte, além de uma entressola em EVA para amortecimento leve e passada mais suave. "
    },
    {
      id:"3",
      imagem: require("../../assets/vinho-rose.jpg"),
      modelo: "Adidas Lite Racer Rebold 1",
      valor:  "R$ 379,99",
      descricao: "Na esteira ou pelas ruas, domine a corrida com o novo Tênis Feminino da Adidas. O Runfalcon 3.0 chega com um cabedal com tripla camada de mesh para ainda mais respirabilidade, calcanhar acolchoado para máximo conforto e suporte, além de uma entressola em EVA para amortecimento leve e passada mais suave. "
    },
    {
      id:"4",
      imagem: require("../../assets/vinho-seco.jpg"),
      modelo: "Adidas Lite Racer Rebold 2",
      valor:  "R$329,05",
      descricao: "Na esteira ou pelas ruas, domine a corrida com o novo Tênis Feminino da Adidas. O Runfalcon 3.0 chega com um cabedal com tripla camada de mesh para ainda mais respirabilidade, calcanhar acolchoado para máximo conforto e suporte, além de uma entressola em EVA para amortecimento leve e passada mais suave. "
    },
    {
      id:"5",
      imagem: require("../../assets/vinho-tinto.jpg"),
      modelo: "Adidas Lite Racer Rebold 3",
      valor:  "R$ 218,49",
      descricao: "Na esteira ou pelas ruas, domine a corrida com o novo Tênis Feminino da Adidas. O Runfalcon 3.0 chega com um cabedal com tripla camada de mesh para ainda mais respirabilidade, calcanhar acolchoado para máximo conforto e suporte, além de uma entressola em EVA para amortecimento leve e passada mais suave. "
    }
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList               
          data={vinhos}
          renderItem={({item})=>
            <Cardvinho
                props={props}
                vinhos={item}
            />
          }
          keyExtractor={item => item.id}          
        />        
      </View>
    </ScrollView>
  );
}