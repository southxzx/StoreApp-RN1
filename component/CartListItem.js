import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

export default function CartListItem(props) {

        const {item} = props;

        return(
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: item.product.colorProducts[0].images[0]}}/>
                    <View>
                        <Text >{item.product.name}</Text>
                        <Text >{item.product.colorProducts[0].price}</Text>
                    </View>
                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      
    },
    containerImg: {
      alignItems: 'center',
    },
    image:{
      height: 80,
      width: 80,
      padding: 'auto',
    },
    shadow:{
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 0 },
      paddingLeft: 10,
      paddingRight: 10, 
      paddingBottom: 10,
      borderRadius: 5,
      paddingTop: 10,
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
  