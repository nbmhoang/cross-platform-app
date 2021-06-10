import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';

import firebase, { signInWithGoogle } from "@config";
import styles from './styles';
import logo from '@assets/images/udn_square.png';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(async(credential) => {
            // console.log(credential.user);
            const { user } = credential ;
            const token = user.toJSON().stsTokenManager.accessToken
            await SecureStore.setItemAsync('token', token);
            navigation.navigate('Home')
        }).catch(err => console.log(err))
    }

    const googleLogin = async() => {
        const { type, accessToken, user } = await Google.logInAsync({
            clientId: '370549396738-1aun7ng2cdhhue1itvvcmd7eafro9fnk.apps.googleusercontent.com'
        });

        if (type === 'success') {
            console.log('OK');
        }
    }

    const loginSuccess = () => {
        console.log('OK');
    }

    const loginFailed = (err) => {
        console.log(err);
    }

    return (
        <View style={styles.centerContainer}>
            <Image source={logo} style={styles.logo} />
            <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} dense mode='outlined' placeholder="Email" />
            <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} dense mode='outlined' placeholder="Mật khẩu" />
            <Pressable onPress={() => navigation.push('ForgotPassword')}>
                <Text style={styles.forgetPw}>Quên mật khẩu?</Text>
            </Pressable>
            <Button mode='contained' onPress={login}>ĐĂNG NHẬP</Button>
            <Button style={styles.redButton} mode='contained' onPress={googleLogin}>ĐĂNG NHẬP VỚI GOOGLE</Button>
            <View style={styles.text}>
                <Text style={{fontWeight: 'bold'}}>Không có tài khoản? </Text>
                <Pressable onPress={() => navigation.push('Register')}><Text style={styles.register}>Đăng ký</Text></Pressable> 
                <Text  style={{fontWeight: 'bold'}}> ngay</Text>
            </View>
        </View>
    )
}

export default Login;