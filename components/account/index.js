import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import ChangePassword from './ChangePassword';
import Profile from './Profile';
import EditProfile from './EditProfile';

const AccountStack = createStackNavigator();

const Account = ({ navigation }) => {
    return (
        <AccountStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <AccountStack.Screen
                name="Login"
                component={Login}
                options={{ title: 'ĐĂNG NHẬP TÀI KHOẢN' }}
            />
            <AccountStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ title: 'QUÊN MẬT KHẨU' }}
            />
            <AccountStack.Screen
                name="Register"
                component={Register}
                options={{ title: 'ĐĂNG KÝ TÀI KHOẢN' }}
            />
            <AccountStack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ title: 'ĐỔI MẬT KHẨU' }}
            />
            <AccountStack.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'HỒ SƠ CÁ NHÂN' }}
            />
            <AccountStack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ title: 'CHỈNH SỬA THÔNG TIN' }}
            />
        </AccountStack.Navigator>
    )
}

export default Account;