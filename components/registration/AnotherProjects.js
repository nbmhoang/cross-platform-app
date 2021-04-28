import React from "react";
import { Text, View, ScrollView } from "react-native";
import { TextInput, RadioButton, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles";

const AnotherProjects = () => {
    const [value, setValue] = React.useState('male');
    const [selectedCity, setSelectedCity] = React.useState();
    const [selectedSchool, setSelectedSchool] = React.useState();
    const [selectedSchool2, setSelectedSchool2] = React.useState();
    const [selectedGroup, setSelectedGroup] = React.useState();
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
            <Text style={styles.text2}>Trường</Text>
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
            <Text style={styles.text2}>Nhóm/Đối tượng xét tuyển</Text>
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedGroup}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedGroup(itemValue)
                    }
                >
                    <Picker.Item label="Nhóm xét tuyển" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                </Picker>
            </View>
            <View style={styles.buttonRow}>
                <Button style={styles.button1} mode='outlined'>CHỌN ẢNH</Button>
            </View>
            <View style={styles.buttonRow2}>
                <Button style={styles.button} mode='contained'>Xem lại</Button>
                <Button style={styles.button} mode='contained'>Đăng ký</Button>
            </View>
        </ScrollView>
    )
}

export default AnotherProjects;