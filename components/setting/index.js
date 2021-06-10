import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Divider, Switch } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as SecureStore from 'expo-secure-store';

import firebase from "@config";
import styles from "./styles";
import ErrorReport from './ErrorReport';

const Setting = ({ navigation, account }) => {

    const [user, setUser] = useState('');
    const [userData, setUserData] = useState('')

    const getUser = async() => {
        const user = firebase.auth().currentUser;
        if (user) {
            // const ref = firebase.database().
            setUser(user);
        }
        
    }

    const logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setUser('')
          }).catch((error) => {
            // An error happened.
          });
          
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <View style={styles.settingContainer}>
            {/* <View style={[styles.menuContainer, {display: 'none'}]}>
                <Avatar.Text size={50} label="AD" />
                <Text style={{flex: 1, marginLeft: 20}}>Nguyễn Văn A</Text>
                <Button mode="contained">ĐĂNG XUẤT</Button>
            </View> */}
            <View style={styles.menuContainer}>
                {user ? <>
                    <Avatar.Image source={{uri: user.photoURL}} style={{width: 50, height: 50, backgroundColor: '#C4C4C4'}} />
                    <Text>{user.displayName}</Text>
                    <Button mode="contained" onPress={logout}>ĐĂNG XUẤT</Button>
                </> : 
                <>
                <Button style={{width: '45%'}} mode='contained' onPress={() => navigation.navigate('Account', {screen: 'Login'})}>ĐĂNG NHẬP</Button>
                <Button style={{width: '45%'}} mode='contained' onPress={() => navigation.navigate('Account', {screen: 'Register'})}>ĐĂNG KÝ</Button>
                </> }
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.menuItemText}>Nhận thông báo</Text>
                <Switch value={true} />
            </View>
            <Divider />
            <View style={styles.menuContainer}>
                <Text style={styles.menuItemText}>Giao diện nền tối</Text>
                <Switch value={false} />
            </View>
            <Divider />
            <View style={styles.menuContainer}>
                <Text style={styles.menuItemText}>Ngôn ngữ</Text>
            </View>
            <Divider />
            <View style={styles.menuContainer}>
                <Text style={styles.menuItemText}>Thống kê truy cập</Text>
            </View>
            <Divider />
            <View style={styles.menuContainer}>
                <Text style={styles.menuItemText}>Báo cáo lỗi</Text>
                <Button onPress={() => navigation.navigate('ErrorReport')} mode='contained'>BÁO LỖI</Button>
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
            <SettingStack.Screen
                name="ErrorReport"
                component={ErrorReport}
                options={{ title: 'BÁO LỖI' }}
            />
        </SettingStack.Navigator>
    )
}

export default SettingScreen;