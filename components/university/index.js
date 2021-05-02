import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider } from 'react-native-paper';

import logo from '@assets/images/udn_square.png'
import styles from "./styles";
import UniversityDetail from "./UniversityDetail";

const UniversityItem = ({ name, address, phoneNumber, website, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
            <Image source={logo} style={styles.logo} />
            <View>
                <Text style={styles.text1}>{name}</Text>
                <View style={styles.textRow}>
                    <MaterialCommunityIcons name="home" size={10} />
                    <Text style={styles.text2}>{address}</Text>
                </View>
                <View style={styles.textRow}>
                    <MaterialCommunityIcons name="phone" size={10} />
                    <Text style={styles.text2}>{phoneNumber}</Text>
                </View>
                <View style={styles.textRow}>
                    <MaterialCommunityIcons name="phone" size={10} />
                    <Text style={styles.text2}>{website}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Index = ({ navigation }) => {

    const listUniversity = [
        {
            name: 'Trường Đại học Bách khoa',
            address: '54 Nguyễn Lương Bằng, Quận Liên Chiểu, TP. Đà Nẵng',
            phoneNumber: '0236.123.123',
            website: 'http://dut.udn.vn/'
        },
        {
            name: 'Trường Đại học Sư Phạm',
            address: '459 Tôn Đức Thắng, Quận Liên Chiểu, TP. Đà Nẵng',
            phoneNumber: '0236.123.123',
            website: 'http://dut.udn.vn/'
        },
        {
            name: 'Trường Đại học Kinh tế',
            address: '71 Ngũ Hành Sơn, Quận Ngũ Hành Sơn, TP. Đà Nẵng',
            phoneNumber: '0236.123.123',
            website: 'http://dut.udn.vn/'
        },
        {
            name: 'Khoa Y Dược',
            address: 'Đô thị ĐHĐN, Quận Ngũ Hành Sơn, TP. Đà Nẵng',
            phoneNumber: '0236.123.123',
            website: 'http://dut.udn.vn/'
        },
        {
            name: 'Trường Đại học Sư phạm Kĩ thuật',
            address: '48 Cao Thắng, Quận Hải Châu, TP. Đà Nẵng',
            phoneNumber: '0236.123.123',
            website: 'http://dut.udn.vn/'
        },
        {
            name: 'Trường Đại học Công nghệ thông tin và truyền thông Việt Hàn',
            address: '470 Trần Đại Nghĩa, Quận Ngũ Hành Sơn, TP. Đà Nẵng',
            phoneNumber: '0236.123.123',
            website: 'http://dut.udn.vn/'
        },
    ]

    return (
        <ScrollView>
            {listUniversity.map((item, index) => (
                <UniversityItem 
                    key={index} 
                    name={item.name} 
                    address={item.address} 
                    phoneNumber={item.phoneNumber} 
                    website={item.website}
                    onPress={() => navigation.navigate('UniversityDetail', {
                        key: index,
                        name: item.name,
                        address: item.address,
                        phoneNumber: item.phoneNumber,
                        website: item.website
                    })}
                />
            ))}
        </ScrollView>
    )
}

const UniversityStack = createStackNavigator();

const University = ({ navigation }) => {
    return (
        <UniversityStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <UniversityStack.Screen
                name="UniversityIndex"
                component={Index}
                options={{ title: 'TRƯỜNG THÀNH VIÊN' }}
            />
            <UniversityStack.Screen
                name="UniversityDetail"
                component={UniversityDetail}
                options={{ title: 'THÔNG TIN CHI TIẾT' }}
            />
        </UniversityStack.Navigator>
    )
}

export default University;