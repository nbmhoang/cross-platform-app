import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Divider, Switch } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const SettingStack = createStackNavigator();

const SettingScreen = ({ navigation }) => {
    return (
        <SettingStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <SettingStack.Screen 
                name="Setting"
                component={Setting}
                options={{ title: 'CÀI ĐẶT ỨNG DỤNG' }}
            />
        </SettingStack.Navigator>
    )
}

export default SettingScreen;