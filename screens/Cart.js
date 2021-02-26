import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect } from 'react';
import {View,FlatList} from 'react-native';
import CartContext from '../context/CartContext';
import CartListItem from '../component/CartListItem';
import { useIsFocused } from '@react-navigation/native';
// import { withNavigationFocus } from 'react-navigation'; // Ver 1xx, ngày nay dùng hook

function Cart() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         item: []
    //     }
    //     this.fetchCart();
        
    // }
    const isFocused = useIsFocused();

    const [item,setItem] = useState([]);

    const fetchCart = () => {
        const loadData = async () => {
            try {
                const data = await AsyncStorage.getItem('Cart');
                if (data !== null){
                    setItem(JSON.parse(data));
                }
            } catch (error) {
                
            }
        }
        loadData();
    }
    useEffect(() => {
        fetchCart();
        return () => {
        }
    }, [isFocused])

    return(
        <View>
            {item ? (
                <FlatList
                    data={item}
                    renderItem={({item})=>(
                        <View>
                            <CartListItem item={item[0]}></CartListItem>
                        </View>
                    )}
                    keyExtractor = {item => `${item[0].product._id}`}
                >
                </FlatList>
            ) : 
            (
                <CartListItem item={[]}></CartListItem>
            )}
        </View>
    )
}

export default Cart




