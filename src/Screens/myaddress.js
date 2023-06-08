import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { mydeleteaddress } from '../redux/actions/Action';
let addresslist = [];
const Myaddress = () => {
  const navigation = useNavigation();
  const isfocused = useIsFocused();
  const dispatch = useDispatch();
  const addresslist = useSelector(state => state.Addreducers);
  // console.warn(addresslist);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 70, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
     <TouchableOpacity  onPress={()=>{
        navigation.goBack();
      }}><Text style={{ fontWeight: '600', fontSize: 20, marginLeft: 15 }}>My Address</Text></TouchableOpacity>
        <TouchableOpacity style={{
          height: 30, marginRight: 20, justifyContent: 'center', alignItems: 'center',
          padding: 5,
          borderWidth: 0.2,
          borderRadius: 2
        }}
          onPress={() => {
            navigation.navigate('Adaddress');
          }}
        >
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={addresslist} renderItem={({ item, index }) => {
        return (
          <View style={{
            width: '100%',
            borderWidth: 0.5, borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
            <View>
              <Text style={{ marginLeft: 20 }}>{"City " + item.city}</Text>
              <Text style={{ marginLeft: 20 }}>{"Building " + item.building}</Text>
              <Text style={{ marginLeft: 20, marginBottom: 20 }}>{"Pincode " + item.pincode}</Text>
            </View>

            <TouchableOpacity style={{ borderWidth: 0.5, borderColor: 'black', marginRight: '6%', padding: '1.5%' }} onPress={() => { dispatch(mydeleteaddress(index)); }} >
              <Text>Delete Address</Text>
            </TouchableOpacity>
          </View>
        )
      }} />
    </View>
  );

};

export default Myaddress;
