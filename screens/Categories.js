import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../component/CategoryListItem';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: [
        {id: 1, name:"Weather forecast"},
        {id: 2, name:"Listen to Music"},
        {id: 3, name:"Reading News"},
        {id: 4, name:"Messenger"}
      ]
    }
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
                        itemName: item.name
                    })}/>
          }
          keyExtractor = {item => `${item.id}`}
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



