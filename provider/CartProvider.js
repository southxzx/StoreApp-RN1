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
        this.des = this.des.bind(this);
        this.inc = this.inc.bind(this);
        this.state = {
            badge: 0,
            cart: []
        }
        this.updateBadge();

        // const deleteCart = async() => {
        //     await AsyncStorage.removeItem('Cart');
        // }
        // deleteCart();
    }

    // Lưu lại data
    storeData = async(data) => {
        console.log("Storing...")
        try {
            await AsyncStorage.setItem('Cart',JSON.stringify(data));
            this.updateBadge();
            this.setState({
                cart: data
            })
        } catch (error) {
            console.error(error);
        }
    }

    // Kiểm tra trùng id
    

    // Thêm sản phẩm
    addToCart(product, qty="1") {
        Alert.alert('Added to cart!');
        let item =
            {
                product: product,
                qty: qty
            }

        let itemsInCart = [];

        const loadData = async() => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                // Nếu storage đã có rồi thì push vào cái cũ
                if (data !== null){
                    itemsInCart  = JSON.parse(data);  
                    // Tìm id trong cart xem có trùng sản phẩm không
                    const index = itemsInCart.findIndex(x => x.product._id === item.product._id);
                    if (index !== -1){
                        // Nếu trùng gọi hàm tăng số lượng
                        this.inc(item.product._id)
                    }
                    else{
                        // Không thì push vào mới
                        itemsInCart.push(item);   
                        this.storeData(itemsInCart);
                    }   
                    // console.log(itemsInCart.length);
                }
                // Nếu storage rỗng thì thêm mới
                else {
                    itemsInCart.push(item);   
                    this.storeData(itemsInCart);
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadData(); // Lấy data trong AsyncStorage rồi push sản phẩm mới vào  
        
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

    // Nút giảm
    des(id){
        let dataInc;
        const loadData = async() => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                if (data !== null){
                    dataInc = JSON.parse(data);   
                    // Tìm id trong cart 
                    const index = dataInc.findIndex(x => x.product._id === id);
                    if (index !== -1){
                        // Nếu qty = 1 thì xóa
                        if(dataInc[index].qty == 1){
                            dataInc.splice(index, 1);
                            this.storeData(dataInc);
                        }
                        // Nếu > 1 thì trừ đi
                        else{
                            dataInc[index].qty -= 1;
                            this.storeData(dataInc);
                        }
                    }             
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadData();

    }

    // Nút tăng
    inc(id){
        let dataInc;
        const loadData = async() => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                if (data !== null){
                    dataInc = JSON.parse(data);   
                    // Tìm id trong cart 
                    const index = dataInc.findIndex(x => x.product._id === id);
                    if (index !== -1){
                        dataInc[index].qty = parseInt(dataInc[index].qty) + 1;
                        console.log(dataInc[index].qty);
                        this.storeData(dataInc);
                    }   
                    else{}          
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadData();
    }
    

    render() {
        console.log("badge:",this.state.badge);
        return (
            <CartContext.Provider value={{
                badge: this.state.badge,
                addToCart: this.addToCart,
                des: this.des,
                inc: this.inc,
                cart: this.state.cart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}