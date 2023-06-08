import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Cartitem from '../common/Cartitem';
import { removeFromCart, addToWishlist } from '../redux/actions/Action';
import Commonbutton from '../common/Commonbutton';
import RazorpayCheckout from 'react-native-razorpay';
import { TouchableHighlight } from 'react-native-web';

//onremovecart
const Cart = () => {
  const checkoout_pay = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_TOJaLpMs3q8P64',
      amount: '5000',
      name: 'Acme Corp',
      order_id: '',//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'jayjay2550thakur@gmail.com',
        contact: '7805064167',
        name: 'jai jai'
      },
      theme: {color: '#53a20e'}
    }
   //console.log(options);
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error} | ${error.description}`);
    });
  };
  const dispatch = useDispatch();

  const [cartlist, setCartlist] = useState([]);
  const cartdata = useSelector(state => state.reducers);
  // console.log(cartdata);
  return (
    <View style={{ flex: 1, marginBottom: 90 }}>
     {cartdata.length>0 ? <ScrollView showsHorizontalScrollIndicator={true}>
        <Text>{cartdata.id}</Text>

        <FlatList data={cartdata} renderItem={({ item, index }) => {
          return (<>
            <Cartitem item={item} onremovecart={(x) => {
              dispatch(removeFromCart(index));
            }} onaddtoWishlist={(x) => { dispatch(addToWishlist(item)); }}
            />
          </>

          )
        }} />
      </ScrollView>: 
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>No Items Added In Cart</Text>
      </View>}
      {cartdata.length>0?
      <View style={{marginBottom:'0%'}}>
        
      <Commonbutton title={'Checkout'} bgColor={'green'} textColor={'#fff'} onPress={()=>{checkoout_pay();}}/>




      </View>:null}
    </View>
  );

}

export default Cart;
