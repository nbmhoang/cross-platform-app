import React from "react";
import { Text, View, ScrollView, Modal, Pressable } from "react-native";
import { TextInput, RadioButton, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles";

const DirectRegistration = () => {
    const [value, setValue] = React.useState('male');
    const [value2, setValue2] = React.useState('first');
    const [selectedCity, setSelectedCity] = React.useState();
    const [selectedSchool, setSelectedSchool] = React.useState();
    const [selectedSchool2, setSelectedSchool2] = React.useState();
    const [selectedCourse, setSelectedCourse] = React.useState();
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textTitle}>Thông tin học sinh</Text>
            <View style={[styles.inputRow]}>
                <TextInput style={styles.input1} dense mode='outlined' placeholder="Họ" />
                <TextInput style={styles.input1} dense mode='outlined' placeholder="Tên đệm" />
                <TextInput style={styles.input1} dense mode='outlined' placeholder="Tên" />
            </View>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
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
            <TextInput style={styles.input3} dense mode='outlined' placeholder="Facebook" />
            <TextInput style={styles.input3} dense mode='outlined' placeholder="Địa chỉ nhận giấy báo" />
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
            <Text style={styles.text2}>Đạt giải</Text>
            <RadioButton.Group onValueChange={value2 => setValue2(value2)} value={value2}>
                <View>
                    <View style={styles.radioItem}>
                        <RadioButton value="first" />
                        <Text style={styles.text1}>Giải nhất</Text>
                    </View>
                    <View style={styles.radioItem}>
                        <RadioButton value="second" />
                        <Text style={styles.text1}>Giải nhì</Text>
                    </View>
                    <View style={styles.radioItem}>
                        <RadioButton value="third" />
                        <Text style={styles.text1}>Giải ba</Text>
                    </View>
                    <View style={styles.radioItem}>
                        <RadioButton value="consolation" />
                        <Text style={styles.text1}>Giải khuyến khích</Text>
                    </View>
                </View>
            </RadioButton.Group>
            <Text style={styles.text2}>Cuộc thi</Text>
            <RadioButton.Group>
                <View>
                    <View style={styles.radioItem}>
                        <RadioButton value="1" />
                        <Text style={styles.text1}>Kỳ thi chọn Học sinh Giỏi quốc gia</Text>
                    </View>
                    <View style={styles.radioItem}>
                        <RadioButton value="2" />
                        <Text style={styles.text1}>Cuộc thi Khoa học Kỹ thuật</Text>
                    </View>
                </View>
            </RadioButton.Group>
            <TextInput style={styles.input3} dense mode='outlined' placeholder="Năm" />
            <TextInput style={styles.input3} dense mode='outlined' placeholder="Tên môn đạt giải" />
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedSchool2}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSchool2(itemValue)
                    }
                >
                    <Picker.Item label="Chọn trường" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                </Picker>
            </View>
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedCourse}
                    style={styles.picker}
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
            <View style={styles.buttonRow}>
                <Button style={styles.button1} mode='outlined'>CHỌN ẢNH</Button>
            </View>
            <View style={styles.buttonRow2}>
                <Button style={styles.button2} mode='contained' onPress={() => setModalVisible(true)}>Xem lại</Button>
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
                    <Text>Email:</Text>
                    <Text>Facebook:</Text>
                    <Text>Địa chỉ nhận giấy báo:</Text>   
                    <Text>Tỉnh/Thành phố:</Text>
                    <Text>Trường THPT:</Text>
                    <Text>Đạt giải:</Text>
                    <Text>Cuộc thi:</Text>
                    <Text>Năm:</Text>
                    <Text>Tên môn đạt giải:</Text>
                    <Text>Ngành đăng ký:</Text>
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

export default DirectRegistration;