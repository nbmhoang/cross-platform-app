import React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';

import styles from './styles';

const UniversityCareersLookup = () => {

    const [selectedSchool, setSelectedSchool] = React.useState();

    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.input} placeholder="Tên trường, mã trường, mã ngành..." />
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedSchool}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSchool(itemValue)
                    }>
                    <Picker.Item label="Ngành học" value="0" />
                    <Picker.Item label="Công nghệ thông tin" value="IT" />
                    <Picker.Item label="Hacker" value="HACK" />
                </Picker>
            </View>
            <Button mode="contained">TÌM KIẾM</Button>
        </ScrollView>
    )
}

export default UniversityCareersLookup;