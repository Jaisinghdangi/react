import {View ,Image} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
const Customtextinput =({value,onChangeText,placeholder,icon,type}) => {
return (
<View  style={{width:'85%',
height:48,
borderWidth:1,
borderRadius:11,
alignSelf:'center',
marginTop:30,
flexDirection:'row',
alignItems:'center',
paddingLeft:20,
paddingRight:20
}}>
    <Image source={icon} style={{width:30,height:30,backgroundColor:'black'}} />
    <TextInput 
    value={value}
    onChangeText={txt=>{
        onChangeText(txt);
    }}
     placeholder={placeholder}
     keyboardType={type=='numeric' ? 'numeric':null}
    secureTextEntry={type=='password' ? true:false}
     style={{marginLeft:10}} 
    />
</View>
);
}
export default Customtextinput;