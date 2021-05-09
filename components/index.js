import React from 'react';
import { Image, Text, View, StatusBar, Pressable } from 'react-native';
import { Button } from "react-native-paper";

import logo from '../assets/images/udn_square.png';
import image from '../assets/images/carousel/0.jpg';

import homeStyle from "./styles";

const MenuOption = ({ label, screen, subScreen, navigation }) => {
    return (
        <Pressable 
            style={homeStyle.menuOption} 
            onPress={() => { 
                if(screen=='Home') { 
                    navigation.navigate('Home', {screen: subScreen})
                } 
                else { 
                    navigation.push(screen)
                }}}
        >
            <Text style={homeStyle.menuOptionText}>{label}</Text>
        </Pressable>
    )

}


const Home = ({ navigation }) => {

    const option = [
        { label: 'Tin tức tuyển sinh', screen: 'Home', subScreen: 'News'  },
        { label: 'Đăng ký xét tuyển', screen: 'Registration' },
        { label: 'Tra cứu điểm chuẩn', screen: 'Home', subScreen: 'Lookup' },
        { label: 'Sau đại học', screen: 'AfterUniversity' },
        { label: 'Hỏi đáp tuyển sinh', screen: 'Home', subScreen: 'FAQ' },
        { label: 'Tin tức về Đại Học Đà Nẵng', screen: 'Registration' },
        { label: 'Các trường thành viên', screen: 'University' }
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
            <MenuOption key={index} label={item.label} screen={item.screen} subScreen={item.subScreen} navigation={navigation}/>
        ))}
        {/* <Button mode="contained">
            Go to new
        </Button> */}

        </>
    )

}

export default Home;