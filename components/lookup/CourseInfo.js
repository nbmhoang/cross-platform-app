import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { List } from 'react-native-paper';


const Info = ({ banner, logoImage, courseName, schoolName, schoolCode, courseCode, yearStart }) => {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView>
            <Image source={banner} style={styles.banner} />
            <View style={styles.container}>
                <View style={styles.title}>
                    <View>
                        <Text style={styles.schoolName}>{schoolName}</Text>
                        <Text style={styles.courseName}>{courseName}</Text>{}
                    </View>
                    <Image source={logoImage} style={styles.logo} />
                </View>
                <List.Section>
                    <List.Accordion
                        title="I. THÔNG TIN"
                        style={styles.list}
                        titleStyle={styles.listTitle}
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

                    </List.Accordion>
                    <List.Accordion
                        title="III. GIỚI THIỆU"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >

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

    const { banner, logoImage, courseName, schoolName, schoolCode, courseCode, yearStart } = route.params;

    return (
        <Info 
            banner={banner}
            logoImage={logoImage}
            courseName={courseName}
            schoolName={schoolName}
            schoolCode={schoolCode}
            courseCode={courseCode}
            yearStart={yearStart}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    banner: {
        height: 113,
        width: "100%"
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    schoolName: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    courseName: {
        fontSize: 14,
        textTransform: 'uppercase'
    },
    logo: {
        height: 50,
        width: 50
    },
    list: {
        backgroundColor: '#054770',
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
    listTitle: {
        color: '#fff'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    text: {
        fontSize: 18
    }
})

export default CourseInfo;