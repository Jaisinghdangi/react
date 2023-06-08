import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Cartitem from '../common/Cartitem';
import { removeFromCart, removeFromWishlist,addItemToCart } from '../redux/actions/Action';
const Wishlist = () => {
  const dispatch=useDispatch();

  const [cartlist,setCartlist]=useState([]);
  const cartdata=useSelector(state=>state.reducers2);
  return (
  <View style={{ flex: 1,marginBottom:90 }}>
    <ScrollView  showsHorizontalScrollIndicator={true}>
 <FlatList data={cartdata} renderItem={({item,index})=>{
  return (<Cartitem iswishlist={'swe'} item={item} onremovewishlist={(x)=>{dispatch(removeFromWishlist(index));
  }} onaddtocart={(x)=>{dispatch(addItemToCart(item));}}/>)
 }}/>
 </ScrollView>
  </View>
   );
  
}

export default Wishlist;
