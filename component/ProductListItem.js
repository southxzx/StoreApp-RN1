import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProductListItem(props){
    const {product} = props;
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image style={styles.image} source={product.img}/>
                </View>
                <View>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.price}>${product.price}</Text>
                        <TouchableOpacity>
                            <Text style={styles.buy}>Buy +</Text>
                        </TouchableOpacity>
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
      marginBottom: 16
    },
    container: {
        backgroundColor: '#f6f6f6',
        paddingLeft: 10,
        paddingRight: 10
    },
    name:{
      textTransform: 'uppercase',
      fontWeight: '700',
      paddingBottom: 15
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
  
