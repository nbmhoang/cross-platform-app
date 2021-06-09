import React from 'react';
import { ScrollView, TextInput, Text, View } from 'react-native';
import { Button, ActivityIndicator, DataTable } from 'react-native-paper';

import firebase from "@config";
import styles from './styles';


const Result = ({ name, birth, identityCard, sex, dtut, kvut, major, subject1, grades1, subject2, grades2, subject3, grades3, universityCode, result }) => {

    return (
        <View style={styles.enrollContainer}>
            <Text style={styles.enrollTitle}>Kết quả tìm kiếm</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.text2}>Tên học sinh: </Text>
                <Text style={[{fontWeight: 'bold'}, styles.text2]}>{name}</Text>
            </View>
            <Text style={styles.text2}>Ngày sinh: {birth}</Text>
            <Text style={styles.text2}>CMND: {identityCard}</Text>
            <Text style={styles.text2}>Giới tính: {sex}</Text>
            <Text style={styles.text2}>Đối tượng ưu tiên: {dtut}</Text>
            <Text style={styles.text2}>Khu vực ưu tiên: {kvut}</Text>
            <Text style={styles.text2}>Ngành: {major==7480201 ? "Công nghệ thông tin" : "Quản trị kinh doanh"}</Text>
            <Text style={styles.text2}>Trường: {universityCode}</Text>
            <DataTable.Row>
                <DataTable.Cell><Text style={[styles.text2, {alignSelf: 'center'}]}>Tổ hợp môn</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text style={styles.text2}>{subject1}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.text2}>{subject2}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.text2}>{subject3}</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.subjectsTable}>
                <DataTable.Cell><Text style={styles.text2}>{grades1}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.text2}>{grades2}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.text2}>{grades3}</Text></DataTable.Cell>
            </DataTable.Row>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.text2}>Tổng điểm: </Text>
                <Text style={[styles.text2, {fontWeight: 'bold'}]}>{grades1 + grades2 + grades3 + dtut + kvut }</Text>
            </View>
            {result=="Đạt"
            ? <Text style={styles.resultTextPassed}>{result}</Text>
            : <Text style={styles.resultTextFailed}>{result}</Text>}
        </View>
    )
}

const EnrollmentResultLookup = () => {

    const [loading, setLoading] = React.useState(false);
    const [info, setInfo] = React.useState('');
    const [studentCode, setStudentCode] = React.useState('');

    const db = firebase.database();
    
    const getData = ({ studentCode }) => {
        setLoading(true);
        const ref = db.ref(`/enrollment-results/school-report/phase-1/${studentCode}`);

        ref.get().then(snapshot => {
            setInfo(snapshot.val());
            setLoading(false);
        }).catch(error => {
            // console.log('Error', error);
            setLoading(false);
        });
    }

    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Nhập mã thí sinh" value={studentCode} onChangeText={text => setStudentCode(text)} />
            <Button mode="contained" onPress={() => getData({studentCode})} >TÌM KIẾM</Button>
            {!loading ? info ?
                <Result name={info.name} birth={info.birth} identityCard={info['identity-card']} sex={info.sex} dtut={info.dtut} kvut={info.kvut} major={info.major} universityCode={info['university-code']} result={info.result} subject1={info.subject1.name} subject2={info.subject2.name} subject3={info.subject3.name} grades1={info.subject1.grades} grades1={info.subject1.grades} grades2={info.subject2.grades} grades3={info.subject3.grades} /> : null
                : <View style={{display: 'flex', height: 500, justifyContent: 'center'}}><ActivityIndicator animating={true} size={50} /></View> }
            
        </ScrollView>
    )
}

export default EnrollmentResultLookup;