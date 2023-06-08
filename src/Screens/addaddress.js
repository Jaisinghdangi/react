import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Customtextinput from '../common/Customtextinput';
import Commonbutton from '../common/Commonbutton';
import { useDispatch } from 'react-redux';
import { myaddaddress } from '../redux/actions/Action';


const Adaddress = () => {
  const navigation = useNavigation();
  const [city, setcity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 70, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        {/* <Text style={{fontWeight:'600',fontSize:20,marginLeft:15  }}>My Address</Text> */}
        <TouchableOpacity style={{
          marginLeft: 20, justifyContent: 'center', alignItems: 'center',
        }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" color={'black'} size={25} />
        </TouchableOpacity>
      </View>
      <Customtextinput placeholder={'Enter city name'}

        icon={require('../img/lock.jpg')}
        value={city}
        onChangeText={txt => { setcity(txt) }}

      />
      <Customtextinput placeholder={'Enter building name'}

        icon={require('../img/lock.jpg')}
        value={building}
        onChangeText={txt => { setBuilding(txt) }}

      />
      <Customtextinput placeholder={'Enter pincode'}
        type={'password'}
        icon={require('../img/lock.jpg')}
        value={pin}
        onChangeText={txt => { setPin(txt) }}

      />
      <Commonbutton title={'Set Address'}
        bgColor={'#000'} 
        textColor={'#fff'}
        onPress={() => { if (city != '' && building != '' && pin != '') { dispatch(myaddaddress({ city: city, building: building, pincode: pin })); navigation.goBack(); } }}

      />
    </View>
  );

};

export default Adaddress;
