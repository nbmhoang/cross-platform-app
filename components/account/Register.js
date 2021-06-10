import React, { useState } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { TextInput, Button, RadioButton, Checkbox } from 'react-native-paper';

import firebase from "@config";
import styles from './styles';

const Register = ({ navigation }) => {

    const ref = firebase.database().ref(`/user`);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [value, setValue] = React.useState('male');
    const [checked, setChecked] = React.useState(false);
    const [isPasswordMatched, setPasswordMatched] = useState(true);

    const register = () => {
        if (password !== confirmPassword) {
            setPasswordMatched(false);
        } else {
            const data = {
                email,
                firstName,
                lastName,
                gender: value === 'female',
                sendNotification: checked
            }
            // console.log(data);
            ref.push(data, error => {
                if (error) {
                    console.log('?',err.message);
                } else {
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then((credential) => {
                            // console.log(credential);
                            navigation.navigate('Home')
                        }).catch(err => {
                            console.log(err);
                        })
                }
            });
        }

        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng ký bằng email</Text>
            <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} dense mode='outlined' placeholder="Email" />
            <TextInput style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} dense mode='outlined' placeholder="Mật khẩu" />
            <TextInput style={isPasswordMatched ? styles.input : {outlineColor: 'red'}} value={confirmPassword} onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} dense mode='outlined' placeholder="Nhập lại mật khẩu" />
            {!isPasswordMatched && <Text style={{color: 'red'}}>Mật khẩu không khớp</Text>}
            <TextInput style={styles.input} value={firstName} onChangeText={text => setFirstName(text)} dense mode='outlined' placeholder="Họ và tên đệm " />
            <TextInput style={styles.input} value={lastName} onChangeText={text => setLastName(text)} dense mode='outlined' placeholder="Tên" />
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <View style={styles.radioRow}>
                    <RadioButton value="male" />
                    <Text style={[styles.text3, {marginRight: 20}]}>Nam</Text>
                    <RadioButton value="female" />
                    <Text style={styles.text3}>Nữ</Text>
                </View>
            </RadioButton.Group>
            <View style={styles.checkbox}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} />
                <Text style={styles.text3}>Nhận email tin tức về tuyển sinh</Text>
            </View>
            <Button mode='contained' onPress={register}>ĐĂNG KÝ</Button>
        </View>
    )
}

export default Register;