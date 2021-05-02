import React from 'react';
import { Text, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';

const MakeQuestion = () => {
    return (
        <ScrollView style={[styles.container, {marginTop: 30}]}>
            <Text style={styles.title}>Đặt câu hỏi tư vấn</Text>
            <Text style={styles.detail}>Thí sinh chỉ đặt những câu hỏi liên quan đến tuyển sinh đại học hệ chính quy vào Đại học Đà Nẵng năm 2021</Text>
            <TextInput style={styles.input} placeholder="Họ tên" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput 
                style={styles.questionInput} 
                placeholder="Nội dung câu hỏi" 
                numberOfLines={10}
                multiline={true}
            />
            <Button mode="contained">GỬI</Button>
        </ScrollView>
    )
}

export default MakeQuestion;