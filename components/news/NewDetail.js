import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';
import HTML from "react-native-render-html";

import firebase from "@config";
import styles from './styles';

const ContentText = ({ text }) => {
    return <Text style={styles.detailContentText}>{text}</Text>
}

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
        // <ScrollView style={styles.container}>
        //     <Text style={styles.detailTitle}>{title}</Text>
        //     <Image source={image} />
        //     <View style={styles.detailContent}>
        //         <ContentText text="Đại học Đà Nẵng công bố thông tin đăng ký xét tuyển vào các trường đại học thành viên, các đơn vị thuộc, trực thuộc năm 2021, trình độ đại học, hệ chính quy như sau:" />
        //         <ContentText text="1. Trường Đại học Bách khoa" />
        //         <ContentText text="2. Trường Đại học Kinh tế" />
        //         <ContentText text="3. Trường Đại học Sư phạm" />
        //         <ContentText text="4. Trường Đại học Ngoại ngữ" />
        //         <ContentText text="5. Trường Đại học Sư phạm Kỹ thuật" />
        //         <ContentText text="6. Trường Đại học Công nghệ thông tin và Truyền thông Việt - Hàn" />
        //         <ContentText text="7. Phân hiệu Đại học Đà Nẵng tại Kon Tum" />
        //         <ContentText text="8. Viện nghiên cứu và Đào tạo Việt - Anh" />
        //         <ContentText text="9. Khoa Y dược" />
        //     </View>
        //     <Text style={styles.detailTime}>{time}</Text>
        //     <Text style={styles.detailTitle2}>Tin liên quan</Text>
        //     <View style={styles.relatedNews}>
        //         <RelatedNews image={image} title="Thông báo xét tuyển Nghiên cứu sinh năm 2021" />
        //         <RelatedNews image={image} title="Thông tin tuyển sinh của Đại học Đà Nẵng năm 2021" />
        //     </View>
        // </ScrollView>
        <ScrollView style={{ flex: 1 }}>
            {content ?
            <>
                <Image source={{ uri: content.cover }} style={{width: '100%'}} />
                <HTML source={{ html: content.content }} contentWidth={contentWidth} />
            </>
            : null}
        </ScrollView>
    )
}

export default NewDetail;