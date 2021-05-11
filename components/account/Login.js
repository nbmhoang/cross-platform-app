import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';
import logo from '@assets/images/udn_square.png';

const Login = ({ navigation }) => {
    return (
        <View style={styles.centerContainer}>
            <Image source={logo} style={styles.logo} />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Email" />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Mật khẩu" />
            <Pressable onPress={() => navigation.push('ForgotPassword')}>
                <Text style={styles.forgetPw}>Quên mật khẩu?</Text>
            </Pressable>
            <Button mode='contained'>ĐĂNG NHẬP</Button>
            <Button style={styles.redButton} mode='contained'>ĐĂNG NHẬP VỚI GOOGLE</Button>
            <View style={styles.text}>
                <Text style={{fontWeight: 'bold'}}>Không có tài khoản? </Text>
                <Pressable onPress={() => navigation.push('Register')}><Text style={styles.register}>Đăng ký</Text></Pressable> 
                <Text  style={{fontWeight: 'bold'}}> ngay</Text>
            </View>
        </View>
    )
}

export default Login;