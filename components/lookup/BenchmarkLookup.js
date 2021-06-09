import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, Image, Text, TouchableOpacity, ActivityIndicator  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button, Divider } from 'react-native-paper';


import firebase from "@config";
import styles from './styles';

const Course = ({ logoImage, courseName, schoolName, benchmark, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.courseContainer}>
                <Image source={{ uri: logoImage }} style={styles.logo} />
                <View style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    <Text style={styles.boldText}>{courseName}</Text>
                    <Text style={styles.text}>{schoolName}</Text>
                    <View style={{flexDirection: 'row'}}>
                        {benchmark && <><Text style={styles.text}>Điểm chuẩn 2020: </Text><Text style={styles.boldText}>{benchmark}</Text></>}
                    </View>
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
   )
}

const BenchmarkLookup = ({ navigation }) => {

    const db = firebase.database();
    const ref = db.ref(`/university`);

    const [term, setTerm] = useState('')
    const [loading, setLoading] = useState(false);
    const [selectedSchool, setSelectedSchool] = React.useState('');

    useEffect(() => {
        searchBenchmark();
    }, [])

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

    const universityData = [
        { universityName: 'Trường Đại học Bách Khoa', code: 'dut' },
        { universityName: 'Trường Đại học Kinh tế', code: 'due' },
        { universityName: 'Trường Đại học Sư phạm', code: 'ued' },
        { universityName: 'Trường Đại học Sư phạm Kỹ thuật', code: 'ute' },
        { universityName: 'Trường Đại học Ngoại Ngữ', code: 'ufl' },
        { universityName: 'Trường Đại học CNTT và Truyền thông Việt - Hàn', code: 'vku' },
        { universityName: 'Phân hiệu Đại học Đà Nẵng tại Kon Tum', code: 'udck' },
        { universityName: 'Khoa Y Dược', code: 'smp' },
        { universityName: 'Viện nghiên cứu và đào tạo Việt - Anh', code: 'vnuk' }
    ]

    const [data, setData] = useState([]);

    const searchBenchmark = () => {
        setLoading(true);
        if (selectedSchool) {
            // Get all
            ref.child(selectedSchool).get().then(snapshot => {
                if (term === '') {
                    const data = snapshot.val();
                    const list = [];
                    for(const [majorId, majorInfo] of Object.entries(data.major)) {
                        list.push({
                            logoImage: data.logo,
                            courseName: majorInfo.name,
                            schoolName: data.name,
                            benchmark: majorInfo['min-mark'] && majorInfo['min-mark'][0]
                        })
                    }
                    setData(list);
                } else {
                    // .major.MAJOR_ID.name == term
                    const data = snapshot.val();
                    const list = [];
                    for(const [majorId, majorInfo] of Object.entries(data.major)) {
                        if (majorInfo.name.toLowerCase().includes(term)) {
                            list.push({
                                logoImage: data.logo,
                                courseName: majorInfo.name,
                                schoolName: data.name,
                                benchmark: majorInfo['min-mark'] && majorInfo['min-mark'][0],
                                // banner: require('../../assets/images/school-banner/vku.jpg'),
                                schoolCode: data['university-code'],
                                courseCode: majorId,
                                // yearStart: "2017"
                            })
                        }
                        
                    }
                    setData(list);
                }
            })
        } else {
            ref.get().then(snapshot => {
                const list = []
                snapshot.forEach(unv => {
                    const universityData = unv.val();
                    const currentUniversity = unv.child('major');
                    const curRef = currentUniversity.getRef()
                    // Not working utf-8
                    curRef.on('value', c => {
                        const majorData = c.val();
                        for(const [majorId, majorInfo] of Object.entries(majorData)) {
                            if (majorInfo.name.toLowerCase().includes(term)) {
                                list.push({
                                    logoImage: universityData.logo,
                                    courseName: majorInfo.name,
                                    schoolName: universityData.name,
                                    benchmark: majorInfo['min-mark'] && majorInfo['min-mark'][0],
                                    // banner: require('../../assets/images/school-banner/vku.jpg'),
                                    schoolCode: universityData['university-code'],
                                    courseCode: majorId,
                                    // yearStart: "2017"
                                })
                            }
                        }
                    })
                })
                setData(list)
            })
        }
        setLoading(false);
    }

    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Ngành học" value={term} onChangeText={text => setTerm(text)} />
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedSchool}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSchool(itemValue)
                    }>
                    {/* <Picker.Item label="Trường" value="0" />
                    <Picker.Item label="Đại học Bách Khoa" value="BK" />
                    <Picker.Item label="Đại học CNTT&TT Việt Hàn" value="VH" /> */}
                    <Picker.Item label="Chọn trường..." value='' />
                    {universityData.map((item, index) => (
                        <Picker.Item key={index} label={item.universityName} value={item.code} />
                    ))}
                </Picker>
            </View>
            <Button mode="contained" onPress={() => searchBenchmark()}>TÌM KIẾM</Button>
            {/* {courseData.map((item) => (
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
            ))} */}
            {!loading ? data && data.map((item, index) => (
                <Course 
                key={index} 
                logoImage={item.logoImage} 
                courseName={item.courseName} 
                schoolName={item.schoolName} 
                benchmark={item.benchmark}
                onPress={() => navigation.navigate('CourseInfo', {
                    
                })}
            />
            )) : <ActivityIndicator animating={true} size={50} />}
        </ScrollView>
    )
}

export default BenchmarkLookup;