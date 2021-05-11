import React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';

import styles from './styles';

const EditProfile = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Text size={120} label="AD" />
                <Button style={{marginTop: 20}} mode='contained'>Đổi ảnh đại diện</Button>
            </View>
            <TextInput style={styles.input2} dense mode='outlined' placeholder="Họ tên" />
            <View style={styles.row}>
                <TextInput style={[styles.input2, {width: '40%'}]} dense mode='outlined' placeholder="Ngày sinh" />
                <TextInput style={[styles.input2, {width: '50%'}]} dense mode='outlined' placeholder="SĐT liên lạc" />
            </View>
            <TextInput style={styles.input2} dense mode='outlined' placeholder="Email" />
            <TextInput style={styles.input2} dense mode='outlined' placeholder="Địa chỉ" />
            <View style={styles.profileContainer2}>
                <Button mode='contained'>hủy</Button>
                <Button mode='contained'>lưu</Button>
            </View>
        </ScrollView>
    )
}

export default EditProfile;