import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';

const Header = () => {
    return (

        <View style={{
            width: '100%',
            height: 78,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderBottomColor: 'black',
            paddingHorizontal:20

        }}>
            <Text style={{
                fontWeight: '600',
                fontSize: 20,
                color: '#000',
            }}>Shopping App</Text>
            <TouchableOpacity
                style={{
                    width: 50,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                {/* <Text>
                    mode</Text> */}

            </TouchableOpacity>
        </View>


    );
}

export default Header;