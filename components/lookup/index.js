import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  

import styles from './styles';
import CourseInfo from "./CourseInfo";
import BenchmarkLookup from './BenchmarkLookup';
import UniversityCareersLookup from './UniversityCareersLookup';
import CollegeCareersLookup from './CollegeCareersLookup';
import EnrollmentResultLookup from './EnrollmentResultLookup';

const MenuOption = ({ text, color, name }) => {
    const navigation = useNavigation(); 
    return (
        <Pressable onPress={() => navigation.push(name)}>
            <View style={[styles.menuOption, {backgroundColor: color}]}>
                <MaterialCommunityIcons name="text-box-search" size={20} style={styles.menuIcon} />
                <Text style={styles.menuText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const Index = () => {

    const option = [
        { text: 'TRA CỨU ĐIỂM CHUẨN', color: '#F36C6C', name: 'BenchmarkLookup' },
        { text: 'TRA CỨU KẾT QUẢ TUYỂN SINH', color: '#99EE9C', name: 'EnrollmentResultLookup' },
        { text: 'TRA CỨU NGÀNH NGHỀ HỆ ĐẠI HỌC', color: '#6A9FD0', name: 'UniversityCareersLookup' },
        { text: 'TRA CỨU NGÀNH NGHỀ HỆ CAO ĐẲNG', color: '#6A9FD0', name: 'CollegeCareersLookup' }
    ]

    return (
        <View style={styles.centerContainer}>
            {option.map((item, index) => (
                <MenuOption key={index} text={item.text} color={item.color} name={item.name} />
            ))}
        </View>
    )
}

const LookupStack = createStackNavigator();

const LookupScreen = ({ navigation }) => {
    return (
        <LookupStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <LookupStack.Screen
                name="LookupIndex"
                component={Index}
                options={{ title: 'TRA CỨU' }}
            />
            <LookupStack.Screen 
                name="BenchmarkLookup"
                component={BenchmarkLookup}
                options={{ title: 'TRA CỨU ĐIỂM CHUẨN' }}
            />
            <LookupStack.Screen
                name="CourseInfo"
                component={CourseInfo}
                options={{ title: 'TRA CỨU ĐIỂM CHUẨN' }}
            />
            <LookupStack.Screen
                name="UniversityCareersLookup"
                component={UniversityCareersLookup}
                options={{ title: 'TRA CỨU NGÀNH NGHỀ HỆ ĐẠI HỌC', headerTitleAlign: 'left' }}
            />
            <LookupStack.Screen
                name="EnrollmentResultLookup"
                component={EnrollmentResultLookup}
                options={{ title: 'TRA CỨU KẾT QUẢ TUYỂN SINH' }}
            />
            <LookupStack.Screen
                name="CollegeCareersLookup"
                component={CollegeCareersLookup}
                options={{ title: 'TRA CỨU NGÀNH NGHỀ HỆ CAO ĐẲNG', headerTitleAlign: 'left' }}
            />
        </LookupStack.Navigator>
    )
}

export default LookupScreen;