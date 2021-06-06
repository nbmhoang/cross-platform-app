import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import firebase from "@config";
import styles from './styles';
import NewDetail from './NewDetail'

const NewsItem = ({ image, title, time, onPress }) => {

    console.log(image);

    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={{uri: image}} />
            <Text style={styles.title2}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
        </TouchableOpacity>
    )
}

const NewsIndex = ({ navigation }) => {

    const [newList, setNewList] = useState([]);

    const db = firebase.database();
    const ref = db.ref(`/news`);

    const getNew = () => {
        ref.on('value', snapshot => {
            const list = [];
            snapshot.forEach(item => {
                // console.log('new', item.val());
                list.push({
                    newId: item.key,
                    ...item.val()
                })
            })
            setNewList(list);
        })
    }


    useEffect(() => {
        getNew();
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title1}>Tin tức nổi bật</Text>
                {/* <NewsItem 
                    image={require('@assets/images/news/news1.png')}
                    title="Thông tin đăng ký xét tuyển vào các cơ sở đào tạo thành viên Đại học Đà Nẵng năm 2021" 
                    time="15 phút trước" 
                    onPress={() => navigation.navigate('NewDetail', {
                        image: require('@assets/images/news/news1.png'),
                        title: "Thông tin đăng ký xét tuyển vào các cơ sở đào tạo thành viên Đại học Đà Nẵng năm 2021",
                        time: "15 phút trước"
                    })}
                /> */}
                {newList && newList.map((item, index) => (
                    <NewsItem
                        key={index}
                        image={item.cover}
                        title={item.title}
                        onPress={() => navigation.navigate('NewDetail', {
                            newId: item.newId
                        })}
                    />
                ))}
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