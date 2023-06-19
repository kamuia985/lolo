import { Image, ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';
import { View } from "react-native-web";


const Cardvinho = ({props, vinhos})=>{
    return(
        <ImageBackground 
        style={estilo.container}
        source={require(`../../assets/img_vinhos/${img}`)}
        resizeMode='contain'
        imageStyle={{borderRadius: 10}}
        onTouchEnd={irParaDetalhes}
      >
        <Text style={estilo.nome}>{vinhos.nome} {vinhos.nome}</Text>
      
      </ImageBackground>,

        <View
            style={estilo.cardVinho}
            onTouchEnd={() => {props.navigation.navigate('Detalhes',vinhos)}}
        >
            <Image
                style={estilo.vinhos}
                source={vinhos.imagem}
            /> 
            <Text style={estilo.titulo}>{vinhos.modelo}</Text>
        </View>

    );
}


const estilo = StyleSheet.create({
    container: {
      width: 375,
      height: 300,
      justifyContent: 'space-between',
      marginBottom: 15,
      
    },
    nome:{
      padding: 5,
      textAlign: 'center',
      backgroundColor: '#400303',
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
      borderTopLeftRadius: 10 ,
      borderTopRightRadius: 10 
    },
    descrico:{
      padding: 5,
      backgroundColor: '#0000009e',
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
      borderBottomLeftRadius: 10 ,
      borderBottomRightRadius: 10 
    },
  
  });
  
  export default Cardvinho;