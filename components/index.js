import React from 'react';
import { Image, Text, View, StatusBar, Pressable } from 'react-native';
import { Button } from "react-native-paper";

import logo from '../assets/images/udn_square.png';
import image from '../assets/images/carousel/0.jpg';

import homeStyle from "./styles";

const MenuOption = ({ label, name, navigation }) => {
    return (
        <Pressable style={homeStyle.menuOption} onPress={() => navigation.navigate({name})}>
            <Text style={homeStyle.menuOptionText}>{label}</Text>
        </Pressable>
    )

}


const Home = ({ navigation }) => {

    const option = [
        { label: 'Tin tức tuyển sinh', name: 'Home' },
        { label: 'Đăng ký xét tuyển', name: 'Registration' },
        { label: 'Tra cứu điểm chuẩn', name: 'Home' },
        { label: 'Sau đại học', name: 'Home' },
        { label: 'Hỏi đáp tuyển sinh', name: 'Home' },
        { label: 'Tin tức về Đại Học Đà Nẵng', name: 'Home' },
        { label: 'Các trường thành viên', name: 'Home' }
    ]

    return (
        <>
        <View style={homeStyle.container}>
            <StatusBar style="auto" />
            <Image source={logo} style={homeStyle.logo}/>
            <View style={homeStyle.content}>
                <Text style={homeStyle.title}>Đại học Đà Nẵng</Text>
                <Text style={homeStyle.subtitle}>The University of DaNang</Text>
            </View>
        </View>
        {/* Assume this is carousel */}
        <Image source={image} style={homeStyle.fakeCarousel} />
        {option.map((item, index) => (
            <MenuOption key={index} label={item.label} name={item.name} navigation={navigation}/>
        ))}
        {/* <Button mode="contained">
            Go to new
        </Button> */}

        </>
    )

}

export default Home;