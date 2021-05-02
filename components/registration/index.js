import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import image from '@assets/images/carousel/0.jpg';
import DirectRegistration from "./DirectRegistration";
import SchoolReportRegistration from "./SchoolReportRegistration";
import GradesRegistration from "./GradesRegistration";
import AssessmentExam from "./AssessmentExam";
import AnotherProjects from "./AnotherProjects";



const MenuOption = ({ text, color, name }) => {
    const navigation = useNavigation(); 
    return (
        <Pressable onPress={() => navigation.push(name)}>
            <View style={[styles.menuOption, {backgroundColor: color}]}>
                <MaterialCommunityIcons name="file-document-edit" size={20} style={styles.menuIcon} />
                <Text style={styles.menuText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const Index = () => {

    const option = [
        { text: 'XÉT TUYỂN THẲNG', color: '#F36C6C', name: 'DirectRegistration' },
        { text: 'ĐĂNG KÝ XÉT HỌC BẠ', color: '#99EE9C', name: 'SchoolReportRegistration' },
        { text: 'ĐĂNG KÝ XÉT ĐIỂM THPT', color: '#6A9FD0', name: 'GradesRegistration' },
        { text: 'ĐĂNG KÝ XÉT TUYỂN ĐGNL', color: '#6A9FD0', name: 'AssessmentExam' },
        { text: 'ĐĂNG KÝ THEO PHƯƠNG THỨC RIÊNG', color: '#6A9FD0', name: 'AnotherProjects' }
    ]

    return (
        <View>
            <Image source={image} style={styles.fakeCarousel} />
            {option.map((item, index) => (
                <MenuOption key={index} text={item.text} color={item.color} name={item.name} />
            ))}
        </View>
    )
}

const RegistrationStack = createStackNavigator();

const Registration = ({ navigation }) => {
    return (
        <RegistrationStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <RegistrationStack.Screen
                name="RegistrationIndex"
                component={Index}
                options={{ title: 'ĐĂNG KÝ XÉT TUYỂN' }}
            />
            <RegistrationStack.Screen 
                name="DirectRegistration"
                component={DirectRegistration}
                options={{ title: 'ĐĂNG KÝ XÉT TUYỂN THẲNG' }}
            />
            <RegistrationStack.Screen
                name="SchoolReportRegistration"
                component={SchoolReportRegistration}
                options={{ title:'ĐĂNG KÝ XÉT HỌC BẠ' }}
            />
            <RegistrationStack.Screen
                name="GradesRegistration"
                component={GradesRegistration}
                options={{ title:'ĐĂNG KÝ XÉT ĐIỂM THPT' }}
            />
            <RegistrationStack.Screen
                name="AssessmentExam"
                component={AssessmentExam}
                options={{ title:'ĐĂNG KÝ XÉT TUYỂN THEO KÌ THI ĐGNL' }}
            />
            <RegistrationStack.Screen
                name="AnotherProjects"
                component={AnotherProjects}
                options={{ title:'ĐĂNG KÝ XÉT TUYỂN THEO ĐỀ ÁN RIÊNG' }}
            />
        </RegistrationStack.Navigator>
    )
}

export default Registration;