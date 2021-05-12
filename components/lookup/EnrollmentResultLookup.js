import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';

const EnrollmentResultLookup = () => {
    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Nhập mã thí sinh" />
            <Button mode="contained">TÌM KIẾM</Button>
        </ScrollView>
    )
}

export default EnrollmentResultLookup;