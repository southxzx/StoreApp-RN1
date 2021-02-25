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

        // const deleteCart = async() => {
        //     await AsyncStorage.removeItem('Cart');
        // }
        // deleteCart();
    }

    // Thêm sản phẩm
    addToCart(product, qty="1") {
        Alert.alert('Added to cart!');
        let item = [
            {
                product: product,
                qty: qty
            }
        ]

        let itemsInCart = [];

        const loadData = async() => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                if (data !== null){
                    itemsInCart  = JSON.parse(data);  
                    itemsInCart.push(item);   
                    storeData();
                    console.log(itemsInCart.length);
                }
                else {
                    itemsInCart.push(item);   
                    storeData();
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadData(); // Lấy data trong AsyncStorage rồi push sản phẩm mới vào  
        
        // Lưu lại data
        const storeData = async() => {
            try {
                await AsyncStorage.setItem('Cart',JSON.stringify(itemsInCart));
                this.updateBadge();
            } catch (error) {
                console.error(error);
            }
        }
    }

    // Update chỉ số ở Navbar
    updateBadge(){
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
        //console.log(this.state.badge);
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