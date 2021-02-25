import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import CartContext from '../context/CartContext';

export default function ProductListItem(props){

    const {product} = props;
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image style={styles.image} source={{uri: product.colorProducts[0].images[0]}}/>
                </View>
                <View>
                    <Text style={styles.name}>{product.name.length < 15 ? product.name : product.name.slice(0, 15)+'...'}</Text>
                    <View style={styles.info}>
                        <Text style={styles.price}>${product.colorProducts[0].price}</Text>
                        <CartContext.Consumer>
                          {(
                            context
                          )=>(
                            <TouchableOpacity onPress={() => context.addToCart(product)}>
                              <Text style={styles.buy}>Buy +</Text>
                            </TouchableOpacity>
                          )}
                        </CartContext.Consumer>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#fff',
      
    },
    containerImg: {
      alignItems: 'center',
    },
    image:{
      height: 180,
      width: 180,
      padding: 'auto',
    },
    shadow:{
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 0 },
    },
    container: {
        backgroundColor: '#f6f6f6',
        paddingLeft: 10,
        paddingRight: 10, 
        paddingBottom: 10,
        borderRadius: 5,
    },
    name:{
      textTransform: 'uppercase',
      fontWeight: '700',
      paddingBottom: 15,
      fontSize: 12,
    },
    info: {
        flexDirection: 'row',
    },
    price: {
      flex: 1,
      color: 'red',
    },
    buy: {
      textTransform: 'uppercase',
      color: 'blue'
    }
  });
  
