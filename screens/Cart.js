import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {View,FlatList} from 'react-native';
import CartContext from '../context/CartContext';
import CartListItem from '../component/CartListItem';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
        this.fetchCart();
    }

    fetchCart() {
        const loadData = async () => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                if (data !== null){
                    this.setState({item: JSON.parse(data)});
                    console.log(JSON.parse(data));
                }
            } catch (error) {
                
            }
        }
        loadData();
    }

    render() {
        console.log(this.state.item.length);
        if (this.state.item.length > 0){
            return (
                <FlatList
                    data={this.state.item}
                    renderItem={({item})=>(
                        <View>
                            <CartListItem item={item[0]}></CartListItem>
                        </View>
                    )}
                    keyExtractor = {item => `${item[0].product._id}`}
                >
                </FlatList>
            )
        }
        else{
            return(
                <CartListItem item={[]}></CartListItem>
            )
        }
    }
}
