import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import DirectRegistration from "./DirectRegistration";
import image from '@assets/images/carousel/0.jpg';
import SchoolReportRegistration from "./SchoolReportRegistration";
import GradesRegistration from "./GradesRegistration";



const MenuOption = ({ text, color, name }) => {
    const navigation = useNavigation(); 
    return (
        <Pressable onPress={() => navigation.navigate(name)}>
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
        { text: 'ĐĂNG KÝ XÉT TUYỂN ĐGNL', color: '#6A9FD0', name: '' },
        { text: 'ĐĂNG KÝ THEO PHƯƠNG THỨC RIÊNG', color: '#6A9FD0', name: '' }
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
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.goBack(null)} size={24} color="white" /> ),
                headerLeftContainerStyle: { left: 14}
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
        </RegistrationStack.Navigator>
    )
}

export default Registration;