import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const Commonbutton = ({ onPress, title, bgColor, textColor,diablebutton }) => {
    return (
        <TouchableOpacity 
        diablebutton={diablebutton}
        style={{
           
            backgroundColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            width: '85%',
            height: 50,
            borderRadius: 10,
            marginTop: 50,
            alignSelf: 'center'
        }}
            onPress={() => { onPress(); }}>
            <Text style={{ color: textColor, fontSize: 22 }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
export default Commonbutton;