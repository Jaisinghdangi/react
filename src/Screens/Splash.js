 import {View,Text,Image} from 'react-native';
import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash =() => {
    const navigation=useNavigation();
useEffect (()=>{
setTimeout(() => {
  navigation.navigate('Home')
}, 3000);
},[])
return (
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image    source={require('../img/ecomm-logo.png')} style={{width:200,height:200}}      /> 
<Text style={{color:'red'}}>jayjay </Text>
</View>
);
}
export default Splash;
