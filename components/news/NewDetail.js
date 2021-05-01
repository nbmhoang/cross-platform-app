import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './styles';

const NewDetail = ({ route }) => {
    
    const { image, title, time} = route.params;

    return (
        <View>
            <Text style={styles.detailTitle}>{title}</Text>
            <Image source={image} />
        </View>
    )
}

export default NewDetail;