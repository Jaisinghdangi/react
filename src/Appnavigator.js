import React from 'react';

import  {createNativeStackNavigator}  from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Login1 from './Screens/Login1';
import Signup from './Screens/Signup';

import Home from './Screens/Home';
import Myaddress from './Screens/myaddress';
import Adaddress from './Screens/addaddress';
const Stack =createNativeStackNavigator();
const Appnavigator =() => {

return (
    <>
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}}
         name="Splash" 
         component={Splash} />
        <Stack.Screen options={{headerShown:false}} 
        name="Login"
         component={Login} />
        <Stack.Screen options={{headerShown:false}} 
        name="Signup"
         component={Signup} />
        
        <Stack.Screen options={{headerShown:false}} 
        name="Login1"
         component={Login1} />

<Stack.Screen options={{headerShown:false}} 
        name="Home"
         component={Home} />
<Stack.Screen options={{headerShown:false}} 
        name="Myaddress"
         component={Myaddress} />
         <Stack.Screen options={{headerShown:false}} 
        name="Adaddress"
         component={Adaddress} />

     </Stack.Navigator>
 </NavigationContainer> 
 </>
);
}

export default Appnavigator;