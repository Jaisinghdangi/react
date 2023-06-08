import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../common/Header';
import Myproduct from '../common/Myproduct';
import { Product } from '../Product';
import { addItemToCart, addToWishlist } from '../redux/actions/Action';


const Main = () => {
  const dispatch=useDispatch();
  const [categorylist, setCategorylist] = useState([]);
  const [shirt, setShirt] = useState([]);
  const [tshirt, setTshirt] = useState([]);
  const [pent, setPent] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [trouser, setTrouser] = useState([]);
  const [slipper, setSlipper] = useState([]);



  useEffect(() => {
    // console.warn(Product);
    let temcategory = [];
    Product.category.map(item => {
      temcategory.push(item);
    })
    setCategorylist(temcategory);
    setShirt(Product.category[0].data);
    setTshirt(Product.category[1].data);
    setPent(Product.category[2].data);
    setJeans(Product.category[3].data);

    setShoes(Product.category[4].data);
    setTrouser(Product.category[5].data);
    setSlipper(Product.category[6].data);

  }, []);
  const cartredurcers=useSelector(state=>state.redurcers);
   //console.warn(items);
  return (
    <SafeAreaView style={{flex:1,marginBottom:90}}>

   <ScrollView  showsHorizontalScrollIndicator={false}>  
    
   <StatusBar hidden={false} />
      <Header />
      <Image source={require('../img/download.jpg')} style={{ width: '100%', height: 200, borderRadius: 10, alignSelf: 'center', marginTop: 10 }} />
      <View>
        <FlatList data={categorylist} horizontal renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ padding: 10, borderWidth: 1, marginLeft: 10, borderRadius: 15 }}>
              <Text>{item.category}</Text>
              {/* {item.data.map(product =>
                <Text>{product.name}</Text>
              )} */}

            </TouchableOpacity>
          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>New T-Shirt</Text>
      <View style={{marginTop:20}}>
        <FlatList data={tshirt} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));
          }}
          onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}
          />
          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>New Shirt</Text>
      <View style={{marginTop:20}}>
        <FlatList data={shirt} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));}} onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}/>
           

          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>Pents</Text>
      <View style={{marginTop:20}}>
        <FlatList data={pent} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));}} 
           onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}
           />
          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>New Jeans</Text>
      <View style={{marginTop:20}}>
        <FlatList data={jeans} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));}} 
           onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}
           />
          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>New Shoes</Text>
      <View style={{marginTop:20}}>
        <FlatList data={shoes} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));}}
           onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}
           />
          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>New Trouser</Text>
      <View style={{marginTop:20}}>
        <FlatList data={trouser} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));}}
           onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}
           />
          )
        }} />
      </View>
      <Text style={{marginTop:20,
      marginLeft:20,
      color:'#000',
      fontSize:16,
      fontWeight:'600'}}>New Slipper</Text>
      <View style={{marginTop:20}}>
        <FlatList data={slipper} horizontal renderItem={({ item, index }) => {
          return (
           <Myproduct item={item} onaddtocart={(x)=>{dispatch(addItemToCart(item));}}
           onaddtoWishlist={(x)=>{dispatch(addToWishlist(item));}}
           />
          )
        }} />
      </View>
      </ScrollView>
      </SafeAreaView >


  );

}

export default Main;
