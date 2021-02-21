import React from 'react'
import { 
    Image,
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';

import WeatherImage from '../assets/weather-app.png';

export default function CategoryListItem(props){
    const { cate, onPressHandle }=props;
    return (
    <TouchableOpacity onPress={onPressHandle}>
        <View style={styles.container}>
            <Text style={styles.title}>{cate.name}</Text>
            {/* <Image style={styles.categoryImage} source={WeatherImage}/> */}
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64
    },
    title:{
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: '#fff',
        marginBottom: 16
    }
})
