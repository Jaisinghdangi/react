import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
const Myproduct = ({item, onaddtocart,onaddtoWishlist}) => {
    const cartdata=useSelector(state=>state.reducers);
   let itenn=item.id;
    return (

        <View style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            elevation: 5,
            backgroundColor: '#fff',
            marginLeft: 20,
            marginBottom: 10,
          
        }}>
            <Image source={item.image} 
            style={{
                width: '100%',
                height: '50%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }} />
            <Text style={{
                 marginLeft: 8, 
                 marginTop: 7, 
                 fontSize: 15, 
                 fontWeight: '600'
                  }}>{item.name}</Text>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', paddingLeft: 10,
                paddingRight: 10,
                marginTop: 12,
                alignItems: 'center',
               
            }}>
                <Text style={{ fontSize: 15, fontWeight: '600' 
            }}>${item.price}</Text>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 7,
                    paddingTop: 7
                }}
                onPress={()=>{
                    onaddtocart(item);
                }}
               // disabled={cartdata[item.id]['id']==item.id}

                >
                    <Text>add to cart</Text>

                </TouchableOpacity>

            </View>
            <TouchableOpacity style={{
                width: 40, height: 40,
                backgroundColor: '#fff',
                borderRadius: 20,
                elevation: 5,
                position: 'absolute',
                top: 10,
                right: 10, 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
            onPress={()=>{
                onaddtoWishlist(item);
            }}
            >
            <AntDesign name="hearto" size={20} />
            </TouchableOpacity>
        </View>


    );
}

export default Myproduct;