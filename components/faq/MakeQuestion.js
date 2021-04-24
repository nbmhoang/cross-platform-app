import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const MakeQuestion = () => {
    return (
        <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    detail: {
        fontSize: 10,
        paddingTop: 5
    },
    input: {
        fontSize: 16,
        height: 40,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 7
    },
    questionInput: {
        fontSize: 16,
        height: 170,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 5,
        paddingLeft: 5,
        marginTop: 7,
        marginBottom: 10
    }
})

export default MakeQuestion;