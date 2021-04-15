import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Divider, Switch } from 'react-native-paper';

import settingStyle from "./style";

const Setting = () => {
    return (
        <View style={settingStyle.settingContainer}>
            <View style={settingStyle.menuContainer}>
                <Avatar.Text size={50} label="AD" />
                <Text style={{flex: 1, marginLeft: 20}}>Nguyễn Văn A</Text>
                <Button mode="contained">ĐĂNG XUẤT</Button>
            </View>
            <View style={settingStyle.menuContainer}>
                <Text style={settingStyle.menuItemText}>Nhận thông báo</Text>
                <Switch value={true} />
            </View>
            <Divider />
            <View style={settingStyle.menuContainer}>
                <Text style={settingStyle.menuItemText}>Giao diện nền tối</Text>
                <Switch value={false} />
            </View>
            <Divider />
            <View style={settingStyle.menuContainer}>
                <Text style={settingStyle.menuItemText}>Ngôn ngữ</Text>
            </View>
            <Divider />
            <View style={settingStyle.menuContainer}>
                <Text style={settingStyle.menuItemText}>Thống kê truy cập</Text>
            </View>
            <Divider />
            <View style={settingStyle.menuContainer}>
                <Text style={settingStyle.menuItemText}>Báo cáo lỗi</Text>
            </View>
        </View>
    )
}

export default Setting;