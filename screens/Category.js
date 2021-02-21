
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import ProductListItem from '../component/ProductListItem';
//import ProductListItem from '../component/ProductListItem';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          img: require('../assets/giay1.jpg'),
          name: 'Air Force',
          price: '199'
        },
        {
          id: 2,
          img: require('../assets/giay1.jpg'),
          name: 'Air Force',
          price: '199'
        }
      ],
    }
  }
  render() {
    const {navigation, route} = this.props;

    // // Get param
    // const {itemName} = route.params;

    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        renderItem={({item})=>
          <View style={styles.wrappers}>
            <ProductListItem product={item}/>
          </View>
        }
        keyExtractor = {item => `${item.id}`}
        numColumns={2}
      />
    )
  }
}
const styles = StyleSheet.create({
  wrappers: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  container: {
    paddingHorizontal: 8
  }
});



