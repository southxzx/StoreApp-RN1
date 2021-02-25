import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Alert } from 'react-native';

import CartContext from '../context/CartContext';

export default class extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     product:{
        //     },
        //     qty: 0
        // };
        this.addToCart = this.addToCart.bind(this);
        this.updateBadge = this.updateBadge.bind(this);
        this.state = {
            badge: 0
        }
        this.updateBadge();
    }

    addToCart(product, qty="1") {
        console.log("Vo1");
        Alert.alert('Added to cart!');
        let item = [
            {
                product: product,
                qty: qty
            }
        ]
        // console.log(this.state.product, this.state.qty);
        const storeData = async() => {
            try {
                await AsyncStorage.setItem('Cart',JSON.stringify(item))
            } catch (error) {
                console.error(error);
            }
        }
        storeData();
        this.updateBadge();
    }

    updateBadge(){
        console.log("Vo2");
        const loadData = async() => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                if (data !== null){
                    this.setState({
                        badge:JSON.parse(data).length
                    })
                    
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    }
    

    render() {
        console.log(this.state.badge + "REdn");
        return (
            <CartContext.Provider value={{
                badge: this.state.badge,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}