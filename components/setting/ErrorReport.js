import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';

const ErrorReport = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} dense mode='outlined' placeholder="Tiêu đề" />
            <TextInput style={styles.input2} dense mode='outlined' multiline numberOfLines={10} placeholder="Nhập nội dung báo lỗi" />
            <Button mode='contained'>GỬI</Button>
        </View>
    )
}

export default ErrorReport;