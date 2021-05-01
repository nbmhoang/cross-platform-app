import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import NewDetail from './NewDetail'

import newsImage from '@assets/images/news/news1.png'

const NewsItem = ({ image, title, time, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={image} />
            <Text style={styles.title2}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
        </TouchableOpacity>
    )
}

const NewsIndex = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title1}>Tin tức nổi bật</Text>
                <NewsItem 
                    image={newsImage} 
                    title="Thông tin đăng ký xét tuyển vào các cơ sở đào tạo thành viên Đại học Đà Nẵng năm 2021" 
                    time="15 phút trước" 
                    onPress={() => navigation.navigate('NewDetail', {
                        image: {newsImage},
                        title: "Thông tin đăng ký xét tuyển vào các cơ sở đào tạo thành viên Đại học Đà Nẵng năm 2021",
                        time: "15 phút trước"
                    })}
                />
            </View>
            <Divider style={styles.divider} />
            <View>
                <Text style={styles.title1}>Kế hoạch thi, tuyển sinh</Text>
            </View>
        </ScrollView>
    )
}

const NewsStack = createStackNavigator();

const News = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name="NewsIndex"
                component={NewsIndex}
                options={{headerShown: false}}
            />
            <NewsStack.Screen
                name="NewDetail"
                component={NewDetail}
                options={{headerShown: false}}
            />
        </NewsStack.Navigator>
    )

}

export default News;