import React from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';
import logo from '@assets/images/udn_square.png'

const ForgotPassword = () => {
    return (
        <View style={styles.centerContainer}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.text2}>Vui lòng nhập e-mail của bạn khi đăng ký</Text>
            <TextInput style={styles.input} dense mode='outlined' placeholder="Email" />
            <Button style={styles.button} mode='contained'>TIẾP TỤC</Button>
        </View>
    )
}

export default ForgotPassword;