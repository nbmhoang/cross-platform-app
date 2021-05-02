import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '@assets/images/udn_square.png'
import styles from "./styles";

const UniversityItem = ({ name, address, phoneNumber, website }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={logo} style={styles.logo} />
            <View>
                <Text style={styles.text1}>{name}</Text>
                <View style={styles.textRow}>
                    <MaterialCommunityIcons name="home" size={10} />
                    <Text style={styles.text2}>{address}</Text>
                </View>
                <View style={styles.textRow}>
                    <MaterialCommunityIcons name="phone" size={10} />
                    <Text style={styles.text2}>{phoneNumber}</Text>
                </View>
                <View style={styles.textRow}>
                    <MaterialCommunityIcons name="phone" size={10} />
                    <Text style={styles.text2}>{website}</Text>
                </View>
            </View>
        </View>
    )
}

const UniversityDetail = ({ route }) => {

    const { name, address, phoneNumber, website } = route.params;

    return (
        <ScrollView>
            <UniversityItem name={name} address={address} phoneNumber={phoneNumber} website={website} />
        </ScrollView>
    )
}

export default UniversityDetail;