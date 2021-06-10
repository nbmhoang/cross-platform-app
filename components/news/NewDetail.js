import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import { Divider } from "react-native-paper";
import HTML from "react-native-render-html";
import momentjs from "moment";

import firebase from "@config";
import styles from './styles';
import { useScrollToTop } from "@react-navigation/native";


const RelatedNews = ({ newId, image, title, onNewPress }) => {

    return (
        <TouchableOpacity style={styles.relatedNewsItem} onPress={onNewPress}>
            <Image source={{ uri: image }} resizeMode="contain" resizeMethod="scale" style={styles.relatedNewsImage} />
            <Text style={styles.relatedNewsTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

const NewDetail = ({ navigation, route }) => {

    const { newId } = route.params;

    const db = firebase.database();
    const ref = db.ref(`/news/${newId}`);
    const otherNew = db.ref(`/news`);

    const scrollViewRef = useRef(null);

    const [content, setContent] = useState('');
    const [related, setRelated] = useState([]);


    useEffect(() => {
        ref.on('value', snapshot => {
            setContent(snapshot.val());
            scrollViewRef.current.scrollTo({y: 0, animated: true})
        });

        otherNew.on('value', snapshot => {
            const list = [];
            snapshot.forEach(currentNew => {
                const data = currentNew.val();
                // console.log(currentNew.val());
                list.push({
                    newId: currentNew.key,
                    ...data
                })
            })
            setRelated(list);
        })
    }, [newId]);
    
    const contentWidth = useWindowDimensions().width;

    const gotoNew = (newId) => {
        navigation.navigate('NewDetail', { newId })
    }

    return (
        <ScrollView ref={scrollViewRef} style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            {content ?
            <>
                <Text style={{marginTop: 6, marginBottom: 7, color: '#054770', fontSize: 18, textAlign: 'center'}}>{content.title}</Text>
                <Image source={{ uri: content.cover }} style={styles.newCover} />
                <HTML source={{ html: content.content }} contentWidth={contentWidth} tagsStyles={{p: {lineHeight: 25}}} />
                <Text style={{marginTop: 11, marginBottom: 4, fontSize: 12, fontStyle: 'italic', color: '#525252', textAlign: 'right'}}>{momentjs(content.postedAt*1000).format('HH:mm DD/MM/yyyy')}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>TIN LIÊN QUAN</Text>
                <Divider style={{height: 1, backgroundColor: '#000', marginTop: 5, marginBottom: 30}} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {related && related.map((item, index) => (
                    <RelatedNews key={index} image={item.cover} title={item.title} onNewPress={() => gotoNew(item.newId)} />
                ))}
                </ScrollView>
            </>
            : null}
        </ScrollView>
    )
}

export default NewDetail;