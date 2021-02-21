import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../component/CategoryListItem';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: []
    }
  }

  componentDidMount() {
    axios.get('https://tinhyeumaunang.herokuapp.com/api/category/get')
    .then(res => {
      this.setState({
        cate: res.data
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  render() {
    const {cate} = this.state;
    const {navigation} = this.props;
    return (
        <FlatList
          data={cate}
          renderItem = {({item})=>
            <CategoryListItem 
                cate={item}
                onPressHandle={()=>
                    navigation.navigate('Category',{
                        idCate: item._id,
                        nameCate: item.name
                    })}/>
          }
          keyExtractor = {item => `${item._id}`}
          contentContainerStyle={{paddingRight: 16, paddingLeft: 16, paddingTop: 16}}
        />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});



