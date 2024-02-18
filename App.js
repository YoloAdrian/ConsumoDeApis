import {  StyleSheet, Text,  View, Image } from 'react-native';
import Producto from './componentes/apiFrutas';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
    
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
     <Image 
        source={require('./assets/src/ensalada-de-frutas.png')}
        style={styles.imagenlog}
      />
        <Text style={styles.texto}>Fruits Fruits</Text>
        <Image 
        source={require('./assets/src/ensalada-de-frutas.png')}
        style={styles.imagenlog}
      />
        
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Text style={styles.textoB}>Conoce los datos de tus frutas favoritas</Text>
      <View style={styles.contenedor}> 
        <Producto/>
        <Image 
          source={{ //la imagen no estaba incluida en la api :)
            uri: 'https://cdn-icons-png.flaticon.com/128/6866/6866494.png',
          }}
          style={styles.imgFrutas}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283747',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#FDFEFE',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
  },
  encabezado:{
    flex:1.4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#566573'
  },
  cuerpo:{
    flex:8
  },
  imagenlog:{
    width:70,
    height:70,
    marginTop: 25,
    marginRight:15,
    marginLeft: 15,
  },
  textoB:{
    color:'#F0B27A',
    fontSize:25,
    textAlign: 'center',
    marginTop: 10,
  },
  imgFrutas:{
    alignSelf: 'center',
    width:100,
    height:100,
    marginTop: 25,
  },
  contenedor:{
    backgroundColor: '#797D7F' ,
    marginTop:15,
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },

  
});