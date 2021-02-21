import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import ProductListItem from '../component/ProductListItem';
import axios from 'axios';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  // Get products from api
  componentDidMount() {

    const {navigation, route} = this.props;
    // Get param
    const {idCate} = route.params;

    axios.post('https://tinhyeumaunang.herokuapp.com/api/product/getAll',{
      limit: 4,
      skip: 0,
      filters:{ 
        category: [`${idCate}`]
      }
    })
    .then(res => {
      this.setState({
        products: res.data.data
      })
      
    })
    .catch(error => {
      console.error(error);
    })

    

  }


  render() {
    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        renderItem={({item})=>
          <View style={styles.wrappers}>
            <ProductListItem product={item}/>
          </View>
        }
        keyExtractor = {item => `${item._id}`}
        numColumns={2}
      />
    )
  }
}
const styles = StyleSheet.create({
  wrappers: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  }
});



