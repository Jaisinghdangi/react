import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
let name='';
const Profile = () => {
  const navigation=useNavigation();

 useEffect(()=>{
getData1();
 },[]);
 const getData1= async ()=>{
  name= await AsyncStorage.getItem('name');
 }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 70, justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' }}>
         <Text style={{fontWeight:'600',fontSize:20,marginLeft:15  }}>Profile</Text>
         <TouchableOpacity style={{width:30,height:30,marginRight:20,justifyContent:'center',alignItems:'center'}}>

         <AntDesign name="setting" color={'black'}size={25}/>
         
         {/* <Entypo name="location-pin" color={'white'}size={20}/> */}

         </TouchableOpacity>
      </View>
      <Image source={require('../img/user.png')}
                                style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 10 }} />


      <Text style={{alignSelf:'center',marginTop:20,fontSize:15}}>{name}</Text> 
      <TouchableOpacity style={{width:'90%',height:20,borderBottomWidth:.3,marginTop:20,borderBottomColor:'#8b8b8b',justifyContent:'center',alignSelf:'center'}}
      onPress={()=>{
        navigation.navigate('Myaddress');
      }}
      >
        <Text style={{}}>My Address</Text>
        </TouchableOpacity>     
        <TouchableOpacity style={{width:'90%',height:20,borderBottomWidth:.3,marginTop:20,borderBottomColor:'#8b8b8b',justifyContent:'center',alignSelf:'center'}}>
        <Text style={{}}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'90%',height:20,borderBottomWidth:.3,marginTop:20,borderBottomColor:'#8b8b8b',justifyContent:'center',alignSelf:'center'}}>
        <Text style={{}}>Offers</Text>
        </TouchableOpacity>                    
    </View>
  );

};

export default Profile;
