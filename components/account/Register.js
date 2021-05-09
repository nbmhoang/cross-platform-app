import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, RadioButton, Checkbox } from 'react-native-paper';

import styles from './styles';

const Register = () => {
    const [value, setValue] = React.useState('male');
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng ký bằng email</Text>
            <TextInput style={styles.input} dense mode='outlined' placeholder="Email" />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Mật khẩu" />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Nhập lại mật khẩu" />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Họ và tên đệm " />
            <TextInput style={styles.input} dense mode='outlined' placeholder="Tên" />
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
            <Button mode='contained'>ĐĂNG KÝ</Button>
        </View>
    )
}

export default Register;