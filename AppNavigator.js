import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from './screens/Settings';
// import BadgeProvider from './provider/BadgeProvider';
// import BadgeContext from './context/BadgeContext';
import CartProvider from './provider/CartProvider';
import CartContext from './context/CartContext'

const ShopStack = createStackNavigator();

function ShopStackScreen() {
    return(
        <ShopStack.Navigator>
            <ShopStack.Screen name="Home" component={Categories}/>
            <ShopStack.Screen 
                name="Category" 
                component={Category}
                options={({route}) => ({title: route.params.nameCate})}
            />
        </ShopStack.Navigator>
    );
}

const CartStack = createStackNavigator();

function CartStackScreen(){
    return(
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={Cart}/>
        </CartStack.Navigator>
    );
}

const OrdersStack = createStackNavigator();

function OrdersStackScreen() {
    return(
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={Orders} />
        </OrdersStack.Navigator> 
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={Settings} />
        </SettingsStack.Navigator> 
    );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator(){

    return (
            <CartContext.Consumer>
                {({badge}) => (
                    <NavigationContainer>
                    <Tab.Navigator
                        contentContainerStyle={{paddingBottom: 16}}
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                    
                                if (route.name === 'Shop') {
                                    iconName = focused
                                    ? 'ios-home-sharp'
                                    : 'md-home-outline';
                                } else if (route.name === 'Settings') {
                                    iconName = focused 
                                    ? 'settings-sharp' 
                                    : 'settings-outline';
                                } else if (route.name === 'Cart'){
                                    iconName = focused 
                                    ? 'cart-sharp' 
                                    : 'cart-outline';
                                } else if (route.name === 'Orders'){
                                    iconName = focused 
                                    ? 'bookmark' 
                                    : 'bookmark-outline';
                                }
                                // You can return any component that you like here!
                                return (
                                    <View style={styles.container}>
                                        <Ionicons name={iconName} size={32} color={color} />
                                    </View>
                                );
                            },
                            })}
                        tabBarOptions={{
                            activeTintColor: '#5856D6',
                            inactiveTintColor: 'gray',
                        }}
                    >
                        <Tab.Screen name="Shop" component={ShopStackScreen}/>
                        <Tab.Screen name="Cart" component={CartStackScreen} options={{tabBarBadge : badge}} />
                        <Tab.Screen name="Orders" component={OrdersStackScreen}/>
                        <Tab.Screen name="Settings" component={SettingsStackScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
                )}
            </CartContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})

