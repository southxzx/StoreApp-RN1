import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartListItem(props) {

        const {item} = props;
        if (item.length <= 0){
          return(
            <View>
              <Text>Empty Cart</Text>
            </View>
          )
        }
        else{
          return(
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: item.product.colorProducts[0].images[0]}}/>
                    <View style={styles.mid}>
                        <Text style={styles.name}>{item.product.name}</Text>
                        <Text style={styles.price}>${item.product.colorProducts[0].price}</Text>
                    </View>
                    <View style={styles.qty}>
                      <TouchableOpacity>
                        <Icon
                          style={styles.icon}
                          name = "minus"
                          size = {25}
                          color="#5856d6"
                        ></Icon>
                      </TouchableOpacity>
                      <Text style={styles.qty_number}>1</Text>
                      <TouchableOpacity>
                        <Icon
                          style={styles.icon}
                          name = "plus"
                          size = {25}
                          color="#5856d6"
                          
                        ></Icon>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
        }

}
const styles = StyleSheet.create({
    mid: {
      justifyContent: 'center',
      paddingLeft: 16, 
      flex: 1,
    },
    qty_number:{
      fontSize: 16,
      fontWeight: '700',
    },
    icon: {
      padding: 5,
      paddingHorizontal: 15
      //backgroundColor: '#8e8e93',
      // borderColor: '#8e8e93',
      // borderWidth: 1,
      // borderRadius: 15,
    },
    qty: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingVertical: 10,
      
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
      fontSize: 14,
    },
    price: {
      color: 'red',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: 18
    },
    buy: {
      textTransform: 'uppercase',
      color: 'blue'
    }
  });
  