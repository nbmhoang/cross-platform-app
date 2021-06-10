import React, { useState } from "react";
import { View, Text, Image, ScrollView, useWindowDimensions } from "react-native";
import { List } from 'react-native-paper';
import HTML from "react-native-render-html";

import styles from './styles';

const Info = ({ banner, logoImage, courseName, schoolName, schoolCode, courseCode, yearStart, mark19, mark20, mark21, aboutUs }) => {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    const contentWidth = useWindowDimensions().width;

    return (
        <ScrollView>
            <Image source={{uri :banner}} style={styles.banner} />
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={{width: '80%'}}>
                        <Text style={styles.schoolName}>{schoolName}</Text>
                        <Text style={styles.courseName}>{courseName}</Text>{}
                    </View>
                    <Image source={{uri: logoImage}} style={styles.logo2} />
                </View>
                <List.Section>
                    <List.Accordion
                        title="I. THÔNG TIN"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                        right={(props) => <List.Icon {...props} icon="equal" />}
                        expanded={expanded}
                        onPress={handlePress}
                        
                    >
                        <View style={styles.content}>
                            <Text style={styles.text}>Mã trường: {schoolCode}</Text>
                            <Text style={styles.text}>Mã ngành: {courseCode}</Text>
                            <Text style={styles.text}>Năm bắt đầu tuyển sinh: {yearStart}</Text>
                        </View>
                    </List.Accordion>
                    <List.Accordion
                        title="II. ĐIỂM CHUẨN"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >
                        <View style={styles.content}>
                            <Text style={styles.text}>Điểm chuẩn năm 2019: {mark19}</Text>
                            <Text style={styles.text}>Điểm chuẩn năm 2020: {mark20}</Text>
                            <Text style={styles.text}>Điểm chuẩn năm 2021: {mark21}</Text>
                        </View>
                    </List.Accordion>
                    <List.Accordion
                        title="III. GIỚI THIỆU"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >
                        {aboutUs &&
                        <HTML source={{ html: aboutUs }} contentWidth={contentWidth} /> }
                    </List.Accordion>
                    <List.Accordion
                        title="IV. CHUẨN ĐẦU RA"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >

                    </List.Accordion>
                    <List.Accordion
                        title="V. CƠ HỘI VIỆC LÀM"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >

                    </List.Accordion>
                </List.Section>
            </View>
        </ScrollView>
    )
}

const CourseInfo = ({ route }) => {

    const { banner, logoImage, courseName, schoolName, schoolCode, courseCode, yearStart, mark19, mark20, benchmark, aboutUs } = route.params;

    return (
        <Info 
            banner={banner}
            logoImage={logoImage}
            courseName={courseName}
            schoolName={schoolName}
            schoolCode={schoolCode}
            courseCode={courseCode}
            yearStart={yearStart}
            mark19={mark19}
            mark20={mark20}
            mark21={benchmark}
            aboutUs={aboutUs}
        />
    )
}

export default CourseInfo;