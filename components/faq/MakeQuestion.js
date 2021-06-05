import React, { useState } from 'react';
import { Text, ScrollView, TextInput, ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';

import firebase from "@config";
import styles from './styles';
import { Portal } from '@material-ui/core';

const MakeQuestion = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('')

    const db = firebase.database();
    const ref = db.ref(`/faq`);



    const sendQuestion = () => {
        const data = {
            name,
            email,
            question: content
        };
        ref.push(data, error => {
            if (error) {
                console.log('Error when posting question');
            } else {
                navigation.goBack();
            }
        })
    }

    return (
        <>
            <ScrollView style={[styles.container, {marginTop: 30}]}>
                <Text style={styles.title}>Đặt câu hỏi tư vấn</Text>
                <Text style={styles.detail}>Thí sinh chỉ đặt những câu hỏi liên quan đến tuyển sinh đại học hệ chính quy vào Đại học Đà Nẵng năm 2021</Text>
                <TextInput style={styles.input} placeholder="Họ tên" value={name} onChangeText={text => setName(text)} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                <TextInput 
                    style={styles.questionInput} 
                    placeholder="Nội dung câu hỏi" 
                    numberOfLines={10}
                    multiline={true}
                    value={content}
                    onChangeText={text => setContent(text)}
                />
                <Button mode="contained" onPress={() => sendQuestion()}>GỬI</Button>
            </ScrollView>
        </>
    )
}

export default MakeQuestion;