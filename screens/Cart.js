import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect } from 'react';
import {View,FlatList, Image, Text, StyleSheet} from 'react-native';
import CartContext from '../context/CartContext';
import CartListItem from '../component/CartListItem';
import { useIsFocused } from '@react-navigation/native';

function Cart() {

    // Hook này để focus vào tab đang mở, true nếu focus
    const isFocused = useIsFocused();

    useEffect(() => {
        return () => {
        }
    }, [isFocused])

    return(
        <CartContext.Consumer>
            {(context) => 
                <View>
                    {context.cart.length > 0 ? (
                        <FlatList
                            data={context.cart}
                            renderItem={({item})=>(
                                <View>
                                    <CartListItem item={item}></CartListItem>
                                </View>
                            )}
                            keyExtractor = {item => `${item.product._id}`}
                        >
                        </FlatList>
                    ) : 
                    (
                        <View style={styles.empty_cart}>
                            <Image style={styles.image_empty}source={require('../assets/cart-empty.png')}/>
                            <Text style={styles.text_empty}>Your cart is empty :(</Text>
                        </View>
                    )}
                </View>
            }
        </CartContext.Consumer>
    )
}

export default Cart

const styles = StyleSheet.create({
    empty_cart: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 200
    },
    image_empty: {
        height: 200,
        width: 200,
    },
    text_empty: {
        fontWeight: '700',
        color: 'grey',
        textAlign: 'center',
    }
})


