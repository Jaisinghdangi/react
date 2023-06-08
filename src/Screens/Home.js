import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Main from '../Bottom/Main';
import Search from '../Bottom/Search';
import Cart from '../Bottom/Cart';
import Wishlist from '../Bottom/Wishlist';
import Profile from '../Bottom/Profile';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const data=useSelector(state=>state);

    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 && <Main /> }
            {selectedTab == 1 && <Search /> }
            {selectedTab == 2 && <Cart /> }
            {selectedTab == 3 && <Wishlist /> }
            {selectedTab == 4 && <Profile /> }

            <View style={{
                width: '100%',
                height: 78,
                backgroundColor: '#fff',
                position: 'absolute',
                justifyContent: 'space-between',
                bottom: 8,
                flexDirection: 'row',
                alignSelf: 'center',

            }}>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(0); }}
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5
                    }}
                >
                        <AntDesign name="home" size={30} color={selectedTab==0?"#bebebe":"#000"} />
                    
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => { setSelectedTab(1); }}>

                    <AntDesign name="search1" size={30} color={selectedTab==1?"#bebebe":"#000"} />

                </TouchableOpacity>

                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        width: 50, height: 50,
                        backgroundColor: '#000',
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => { setSelectedTab(2); }}

                    >
                        <Feather name="shopping-bag" size={30} color={selectedTab==2?"green":"#fff"} />
                        <View style={{width:20,height:20,backgroundColor:'red',borderRadius:10,justifyContent:'center',alignItems:'center',
                    position:'absolute',
                    top:10,
                    right:6
                    }}>
    <Text style={{color:'#fff',fontWeight:'600'}}>{data.reducers.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    onPress={() => { setSelectedTab(3); }}

                >

                    <AntDesign name="hearto" size={30} color={selectedTab==3?"#bebebe":"#000"} />
                    <View style={{width:20,height:20,backgroundColor:'red',borderRadius:10,justifyContent:'center',alignItems:'center',
                    position:'absolute',
                    top:20,
                    right:12
                    }}>
    <Text style={{color:'#fff',fontWeight:'600'}}>{data.reducers2.length}</Text>
                        </View>


                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10
                }}
                    onPress={() => { setSelectedTab(4); }}

                >

                    <EvilIcons name="user" size={40} color={selectedTab==4?"#bebebe":"#000"} />
                </TouchableOpacity>



            </View>

        </View>

    );
}

export default Home;