import React from 'react'
import { 
    Image,
    View,
    Text,
} from 'react-native';

import WeatherImage from '../assets/weather-app.png';

export default function CategoryListItem(){
    return <View>
        <Text>CategoryListItem</Text>
        <Image source={WeatherImage}/>
        <Text>SSS</Text>
    </View>
}
