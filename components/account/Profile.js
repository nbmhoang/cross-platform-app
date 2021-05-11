import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';

import styles from './styles';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatar.Text size={120} label="AD" />
                <View>
                    <Text style={styles.text4}>NGUYỄN VĂN A</Text>
                    <Text style={styles.text4}>01/02/2006</Text>
                    <Text style={styles.text4}>0123456789</Text>
                    <Text style={styles.text4}>Ngũ hành sơn, đà nẵng</Text>
                </View>
            </View>
            <View style={styles.profileContainer2}>
                <Button labelStyle={styles.labelButton} mode='contained' onPress={() => navigation.navigate('EditProfile')}>cHỈNH SỬA THÔNG TIN</Button>
                <Button labelStyle={styles.labelButton} mode='contained'>Xem lại nguyện vọng</Button>
            </View>
        </View> 
    )
}

export default Profile;
