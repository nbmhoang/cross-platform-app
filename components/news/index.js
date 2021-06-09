import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import SkeletonContent from 'react-native-skeleton-content';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import momentjs from "moment";

import firebase from "@config";
import styles from './styles';
import NewDetail from './NewDetail'

const NewsItem = ({ image, title, postedAt, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.newCover} source={{uri: image}}/>
            <Text style={styles.title2}>{title}</Text>
            <Text style={styles.time}>{momentjs(postedAt*1000).fromNow()}</Text>
        </TouchableOpacity>
    )
}

const NewsIndex = ({ navigation }) => {

    const [newList, setNewList] = useState([]);
    const [loading, setLoading] = useState(false);

    const db = firebase.database();
    const ref = db.ref(`/news`);

    const getNew = () => {
        setLoading(true)
        ref.orderByChild('postedAt').on('value', snapshot => {
            const list = [];
            snapshot.forEach(item => {
                // console.log('new', item.val());
                list.unshift({
                    newId: item.key,
                    ...item.val()
                })
            })
            setNewList(list);
            setLoading(false);
        })
    }


    useEffect(() => {
        getNew();

        return () => {
            setNewList([]);
        }
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View>
                {/* <Text style={styles.title1}>Tin tức nổi bật</Text> */}
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
                {!loading ? newList && newList.map((item, index) => (
                    <>
                    <NewsItem
                        key={index}
                        image={item.cover}
                        title={item.title}
                        postedAt={item.postedAt}
                        onPress={() => navigation.navigate('NewDetail', {
                            newId: item.newId
                        })}
                    />
                    {index < newList.length - 1 && <Divider style={styles.newSeperator} />}
                    </>
                )) : Array.from({length: 5}).map((_,index) => (
                    <SkeletonContent
                        containerStyle={{flex: 1, width: '100%'}}
                        animationDirection="horizontalLeft"
                        isLoading={true}
                        layout={[
                            { key: 'coverSkeleton', width: '100%', height: 200, marginBottom: 10, borderRadius: 10 },
                            { key: 'titleSkeleton', width: '100%', height: 40, marginBottom: 10 },
                            { key: 'timeSkeleton', width: 100, height: 15, marginBottom: 10 }
                        ]}
                    />
                ))}
            </View>
            {/* <Divider style={styles.divider} />
            <View>
                <Text style={styles.title1}>Kế hoạch thi, tuyển sinh</Text>
            </View> */}
            <View style={{marginBottom: 20}}>

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