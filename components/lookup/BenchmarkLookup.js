import React from 'react';
import { View, ScrollView, TextInput, Image, Text, TouchableOpacity  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button, Divider } from 'react-native-paper';

import styles from './styles';

const Course = ({ logoImage, courseName, schoolName, benchmark, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.courseContainer}>
                <Image source={logoImage} style={styles.logo} />
                <View>
                    <Text style={styles.boldText}>{courseName}</Text>
                    <Text style={styles.text}>{schoolName}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>Điểm chuẩn 2020: </Text><Text style={styles.boldText}>{benchmark}</Text>
                    </View>
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
   )
}

const BenchmarkLookup = ({ navigation }) => {

    const [selectedSchool, setSelectedSchool] = React.useState();

    const courseData = [
        {
            key: "mhkfiu543t",
            logoImage: require('../../assets/images/school-logo/due.png'),
            courseName: "Công nghệ thông tin",
            schoolName: "Trường ĐH Kinh tế Đà Nẵng",
            benchmark: "21.5",
            banner: require('../../assets/images/school-banner/due.png'),
            schoolCode: "DDQ",
            courseCode: "7480201",
            yearStart: "2015"
        },
        {
            key: "hgerjnog4",
            logoImage: require('../../assets/images/school-logo/ued.png'),
            courseName: "Công nghệ thông tin (CLC)",
            schoolName: "Trường ĐH Sư phạm Đà Nẵng",
            benchmark: "18.75",
            banner: require('../../assets/images/school-banner/ued.jpg'),
            schoolCode: "DDS",
            courseCode: "7480201",
            yearStart: "2010"
        },
        {
            key: "gjnkwerj43",
            logoImage: require('../../assets/images/school-logo/ute.png'),
            courseName: "Công nghệ thông tin (CLC)",
            schoolName: "Trường Đại học SPKT Đà Nẵng",
            benchmark: "20.75",
            banner: require('../../assets/images/school-banner/ute.jpg'),
            schoolCode: "DDC",
            courseCode: "7480201",
            yearStart: "2020"
        },
        {
            key: "cweojnfi5y5",
            logoImage: require('../../assets/images/school-logo/vku.png'),
            courseName: "Công nghệ thông tin",
            schoolName: "Trường ĐH CNTT&TT Việt Hàn",
            benchmark: "22",
            banner: require('../../assets/images/school-banner/vku.jpg'),
            schoolCode: "DDI",
            courseCode: "7480201",
            yearStart: "2017"
        }
    ]

    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Ngành học" />
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedSchool}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSchool(itemValue)
                    }>
                    <Picker.Item label="Trường" value="0" />
                    <Picker.Item label="Đại học Bách Khoa" value="BK" />
                    <Picker.Item label="Đại học CNTT&TT Việt Hàn" value="VH" />
                </Picker>
            </View>
            <Button mode="contained">TÌM KIẾM</Button>
            {courseData.map((item) => (
                <Course 
                    key={item.key} 
                    logoImage={item.logoImage} 
                    courseName={item.courseName} 
                    schoolName={item.schoolName} 
                    benchmark={item.benchmark}
                    onPress={() => navigation.navigate('CourseInfo', {
                        key: item.key,
                        logoImage: item.logoImage,
                        courseName: item.courseName,
                        schoolName: item.schoolNamem,
                        banner: item.banner,
                        schoolCode: item.schoolCode,
                        courseCode: item.courseCode,
                        yearStart: item.yearStart
                    })}
                />
            ))}
        </ScrollView>
    )
}

export default BenchmarkLookup;