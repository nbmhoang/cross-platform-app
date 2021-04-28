import React from "react";
import { Text, View, ScrollView, Pressable, Modal } from "react-native";
import { TextInput, RadioButton, Button, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles";

const SchoolReportRegistration = () => {
    const [value, setValue] = React.useState('1');
    const [value2, setValue2] = React.useState('male');
    const [selectedCity, setSelectedCity] = React.useState();
    const [selectedSchool, setSelectedSchool] = React.useState();
    const [selectedArea, setSelectedArea] = React.useState();
    const [selectedPriority, setSelectedPriority] = React.useState();
    const [selectedUniversity, setSelectedUniversity] = React.useState();
    const [selectedCourse, setSelectedCourse] = React.useState();
    const [selectedSubject, setSelectedSubject] = React.useState();
    const [checked, setChecked] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textTitle}>Thông tin học sinh</Text>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <View style={styles.radioRow}>
                    <RadioButton value="1" />
                    <Text style={[styles.text1, {marginRight: 20}]}>Phương án 1</Text>
                    <RadioButton value="2" />
                    <Text style={styles.text1}>Phương án 2</Text>
                </View>
            </RadioButton.Group>
            <Text style={styles.text3}>Dựa vào Kết quả học tập năm Lớp 12; Lấy cột Trung bình cả năm của 3 môn xét tuyển</Text>
            <View style={[styles.inputRow]}>
                <TextInput style={styles.input1} dense mode='outlined' placeholder="Họ" />
                <TextInput style={styles.input1} dense mode='outlined' placeholder="Tên đệm" />
                <TextInput style={styles.input1} dense mode='outlined' placeholder="Tên" />
            </View>
            <RadioButton.Group onValueChange={value2 => setValue2(value2)} value={value2}>
                <View style={styles.radioRow}>
                    <RadioButton value="male" />
                    <Text style={[styles.text1, {marginRight: 20}]}>Nam</Text>
                    <RadioButton value="female" />
                    <Text style={styles.text1}>Nữ</Text>
                </View>
            </RadioButton.Group>
            <View style={styles.inputRow}>
                <TextInput style={styles.input2} dense mode='outlined' placeholder="Ngày sinh" />
                <TextInput style={styles.input2} dense mode='outlined' placeholder="Số điện thoại" />
            </View>
            <TextInput style={styles.input3} dense mode='outlined' placeholder="Email" />
            <TextInput style={styles.input3} dense mode='outlined' placeholder="Địa chỉ liên lạc" />
            <View style={styles.pickerContainer}>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={selectedCity}
                        style={[styles.picker, styles.half]}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCity(itemValue)
                        }
                    >
                        <Picker.Item label="Tỉnh thành" value="0" />
                        <Picker.Item label="Đà Nẵng" value="danang" />
                        <Picker.Item label="Quảng Nam" value="quangnam" />
                    </Picker>
                </View>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={selectedSchool}
                        style={[styles.picker, styles.half]}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSchool(itemValue)
                        }
                    >
                        <Picker.Item label="Trường THPT" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                </View>
            </View>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={selectedArea}
                        style={[styles.picker, styles.half]}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedArea(itemValue)
                        }
                    >
                        <Picker.Item label="Khu vực" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                </View>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={selectedPriority}
                        style={[styles.picker, styles.half]}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedPriority(itemValue)
                        }
                    >
                        <Picker.Item label="0 - Không ưu tiên" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                </View>
            </View>
            <Text style={[styles.textTitle, {marginTop: 15}]}>Thông tin đăng ký</Text>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={selectedUniversity}
                        style={[styles.picker, styles.half]}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedUniversity(itemValue)
                        }
                    >
                        <Picker.Item label="Đại học" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                </View>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={selectedCourse}
                        style={[styles.picker, styles.half]}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCourse(itemValue)
                        }
                    >
                        <Picker.Item label="Chọn ngành" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                </View>
            </View>
            <View style={[styles.pickerView, styles.half]}>
                <Picker
                    selectedValue={selectedSubject}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSubject(itemValue)
                    }
                >
                    <Picker.Item label="Chọn nhóm môn" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                </Picker>
            </View>
            <View style={[styles.inputRow, {marginTop: 10}]}>
                <Text style={styles.half}>Tổ hợp môn Xét tuyển</Text>
                <Text style={styles.half}>Điểm trung bình cả năm lớp 12</Text>
            </View>
            <View style={styles.inputRow}>
                <TextInput style={styles.input2} dense mode='outlined' />
                <TextInput style={styles.input2} dense mode='outlined' placeholder="0.00" />
            </View>
            <View style={styles.inputRow}>
                <TextInput style={styles.input2} dense mode='outlined' />
                <TextInput style={styles.input2} dense mode='outlined' placeholder="0.00" />
            </View>
            <View style={styles.inputRow}>
                <TextInput style={styles.input2} dense mode='outlined' />
                <TextInput style={styles.input2} dense mode='outlined' placeholder="0.00" />
            </View>
            <View style={styles.inputRow}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} />
                    <Text>Đã tốt nghiệp THPT</Text>
                </View>
                <TextInput style={styles.input2} dense mode='outlined' placeholder="Năm tốt nghiệp" />
            </View>
            <View style={styles.buttonRow}>
                <Button style={styles.button1} mode='outlined'>CHỌN ẢNH</Button>
            </View>
            <View style={styles.buttonRow2}>
                <Button style={styles.button} mode='contained' onPress={() => setModalVisible(true)}>Xem lại</Button>
                <Button style={styles.button} mode='contained'>Đăng ký</Button>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>THÔNG TIN HỌC SINH XÉT TUYỂN THẲNG VÀO ĐẠI HỌC</Text>
                    <Text style={styles.modalTitle2}>Thông tin học sinh</Text>
                    <Text>Họ và tên:</Text>
                    <Text>Giới tính:</Text>
                    <Text>Ngày sinh:</Text>
                    <Text>Điện thoại:</Text>
                    <Text>Địa chỉ liên lạc:</Text>
                    <Text>Tỉnh/Thành phố:</Text>
                    <Text>Trường THPT:</Text>
                    <Text style={styles.modalTitle2}>Thông tin đăng ký</Text>
                    <Text>Trường: Đại học CNTT & TT Việt Hàn</Text>
                    <Text>Ngành - Bậc: Công nghệ tin thông tin</Text>
                    <Text>Nhóm môn: Toán, Lý, Hóa</Text>
                    <Text style={styles.modalTitle2}>Thông tin học bạ</Text>
                    <View style={styles.gradesView}>
                        <Text style={styles.gradesItem}>Môn xét tuyển</Text>
                        <Text style={styles.gradesItem}>Điểm TB cả năm lớp 12</Text>
                    </View>
                    <View style={styles.gradesView}>
                        <Text style={styles.gradesItem}>Toán</Text>
                        <Text style={styles.gradesItem}>8.7</Text>
                    </View>
                    <View style={styles.gradesView}>
                        <Text style={styles.gradesItem}>Lý</Text>
                        <Text style={styles.gradesItem}>9.6</Text>
                    </View>
                    <View style={styles.gradesView}>
                        <Text style={styles.gradesItem}>Hóa</Text>
                        <Text style={styles.gradesItem}>8.5</Text>
                    </View>
                    <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Thoát</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default SchoolReportRegistration;