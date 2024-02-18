import { ActivityIndicator, Alert, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './stylos'

const Producto = () => {
    const [dato,setDato]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://www.fruityvice.com/api/fruit/apple')
        .then((res)=>res.json())
        .then((obj)=>{
            setDato(obj)
            setLoad(true)
        })
        .catch((err)=>Alert.alert('Ocurrio un error : '+err))
    },[])

    const screenL=()=>{
        return(
        <View>
            <Text style={estilos.texto}>Nombre de la fruta : {dato.name}</Text>
            <Text style={estilos.texto}>Familia : {dato.family} </Text>
            <Text style={estilos.texto}>Calorias : {dato.nutritions.calories} </Text>
            <Text style={estilos.texto}>Azucares : {dato.nutritions.sugar} </Text>
            <Text style={estilos.texto}>Carbohidratos : {dato.nutritions.carbohydrates} </Text>
            <Text style={estilos.texto}>Proteinas : {dato.nutritions.protein} </Text>
        </View>
        )
    }

    const screenU=()=>{
        return(
            <View>
                <Text>Recopilando Informacion</Text>
                <ActivityIndicator/>
            </View>
        )
    }

  return (
    <View>
    {load?screenL():screenU()}
    </View>
  )
}

export default Producto