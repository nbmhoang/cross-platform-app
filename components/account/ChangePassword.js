import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';

const ChangePassword = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đổi mật khẩu</Text>
            <TextInput style={styles.input} dense mode='outlined' placeholder="Nhập mật khẩu" />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Nhập mật khẩu cần đổi" />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Nhập lại mật khẩu" />
            <Button style={styles.changePwButton} mode='contained'>XÁC NHẬN ĐỔI MẬT KHẨU</Button>
        </View>
    )
}

export default ChangePassword;