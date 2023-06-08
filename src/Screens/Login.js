import { View, Text, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Customtextinput from '../common/Customtextinput';
import Commonbutton from '../common/Commonbutton';
import { useNavigation } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native-gesture-handler";

const Login = () => {
        const navigation = useNavigation();
        const [mobile, setMobile] = useState('');
        const [password, setPassword] = useState('');
        const [badmobile, setBadMobile] = useState(false);
        const [badpassword, setBadpassword] = useState(false);



        const login = () => {
                if (mobile == '') {
                        setBadMobile(true);
                } else {
                        setBadMobile(false);
                }
                if (password == '') {
                        setBadpassword(true);
                } else {
                        setBadpassword(false);
                        getData();
                }


        }
// useEffect(()=>{
// checkData();
// },[])
// const checkData = async () => {
//         const memail = await AsyncStorage.getItem('email');
//         const mpass = await AsyncStorage.getItem('password');
//         if (memail && mpass) {
//                 navigation.navigate('Home');
//         }

// }



        const getData = async () => {
               
                //const mpass = await AsyncStorage.getItem('password');
              //  if (email === memail && password === mpass) {

                if (mobile && password) {
                        var APIURL = "http://192.168.87.179/api/login.php";

                        var headers = {
                          'Accept' : 'application/json',
                          'Content-Type' : 'application/json',
                        };
                              
                        var Data ={
                          mobile: mobile,
                          Password: password,
                        };
                  
                        fetch(APIURL,{
                          method: 'POST',
                          headers: headers,
                          body: JSON.stringify(Data)
                        })
                        .then((Response)=>Response.json())
                        .then(async (Response)=>{
                          alert(Response[0].Message)
                          if (Response[0].Message == "Success") {
                                await AsyncStorage.setItem("mobile", mobile);
                                await AsyncStorage.setItem("password", password);
                            navigation.navigate('Home');

                          }
                         console.log(Response);
                        })
                        .catch((error)=>{
                          console.error("ERROR FOUND " + error);
                        })}
                    else {
                        alert("Required Field Is Missing!!!");

                        }

        }


        return (
                <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>

                <View style={{ flex: 1 }}>
                        <Image source={require('../img/ecomm-logo.png')}
                                style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 100 }} />
                        <Text
                                style={{
                                        marginTop: 50,
                                        alignSelf: 'center',
                                        fontSize: 30,
                                        fontWeight: '600',
                                        color: '#000'
                                }}>Login</Text>
                        <Customtextinput placeholder={'enter mobile number'}
                                icon={require('../img/email.jpg')}
                                value={mobile}
                                type={"numeric"}
                                onChangeText={txt => { setMobile(txt); }}
                        />
                        {badmobile === true && (<Text style={{
                                marginTop: 10,
                                marginLeft: 30,
                                color: 'red'
                        }}>Please Enter Mobile Number</Text>)

                        }

                        <Customtextinput placeholder={'enter password'}
                                type={'password'}
                                icon={require('../img/lock.jpg')}
                                value={password}
                                onChangeText={txt => { setPassword(txt); }}

                        />
                        {badpassword === true && (<Text style={{
                                marginTop: 10,
                                marginLeft: 30,
                                color: 'red'
                        }}>Please Enter Password</Text>)

                        }


                        <Commonbutton title={'login'}
                                bgColor={'#000'}
                                textColor={'#fff'}
                                onPress={() => {
                                        login();
                                }}
                        />
                        <Text style={{
                                fontSize: 18,
                                fontWeight: '600',
                                alignSelf: 'center',
                                marginTop: 20,
                                textDecorationLine: 'underline'
                        }}
                                onPress={() => { navigation.navigate('Signup') }}>
                                Create New Account?
                        </Text>
                </View>
                </ScrollView>
        );
}
export default Login;