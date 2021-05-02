import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import NewDetail from './NewDetail'

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
                    image={require('@assets/images/news/news1.png')}
                    title="Thông tin đăng ký xét tuyển vào các cơ sở đào tạo thành viên Đại học Đà Nẵng năm 2021" 
                    time="15 phút trước" 
                    onPress={() => navigation.navigate('NewDetail', {
                        image: require('@assets/images/news/news1.png'),
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

const NewsScreen = ({ navigation }) => {
    return (
        <NewsStack.Navigator
            screenOptions={{
                headerTitle: 'TIN TỨC',
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <NewsStack.Screen
                name="NewsIndex"
                component={NewsIndex}
            />
            <NewsStack.Screen
                name="NewDetail"
                component={NewDetail}
            />
        </NewsStack.Navigator>
    )

}

export default NewsScreen;