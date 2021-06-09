import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';
import HTML from "react-native-render-html";
import momentjs from "moment";

import firebase from "@config";
import styles from './styles';
import { Divider } from "react-native-paper";

const RelatedNews = ({ image, title }) => {
    return (
        <TouchableOpacity style={styles.relatedNewsItem}>
            <Image source={image} resizeMode="contain" resizeMethod="scale" style={styles.relatedNewsImage} />
            <Text style={styles.relatedNewsTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

const NewDetail = ({ route }) => {
    
    const { newId } = route.params;

    const db = firebase.database();
    const ref = db.ref(`/news/${newId}`);

    const [content, setContent] = useState('');

    useEffect(() => {
        ref.on('value', snapshot => {
            setContent(snapshot.val());
        })
    }, []);
    
    const contentWidth = useWindowDimensions().width;

    return (
        <ScrollView style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            {content ?
            <>
                <Text style={{marginTop: 6, marginBottom: 7, color: '#054770', fontSize: 18, textAlign: 'center'}}>{content.title}</Text>
                <Image source={{ uri: content.cover }} style={styles.newCover} />
                <HTML source={{ html: content.content }} contentWidth={contentWidth} tagsStyles={{p: {lineHeight: 25}}} />
                <Text style={{marginTop: 11, marginBottom: 4, fontSize: 12, fontStyle: 'italic', color: '#525252', textAlign: 'right'}}>{momentjs(content.postedAt*1000).format('HH:mm DD/MM/yyyy')}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>TIN LIÊN QUAN</Text>
                <Divider style={{height: 1, backgroundColor: '#000', marginTop: 5, marginBottom: 30}} />
            </>
            : null}
        </ScrollView>
    )
}

export default NewDetail;