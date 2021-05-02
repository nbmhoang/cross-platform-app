import React from "react";
import { View, Text, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';

const MenuOption = ({ text }) => {
    return (
        <Pressable>
            <View style={styles.menuOption}>
                <MaterialCommunityIcons name="school" size={20} style={styles.menuIcon} />
                <Text style={styles.menuText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const Index = () => {

    const option = [
        { text: 'THẠC SĨ'},
        { text: 'TIẾN SĨ'}
    ]

    return (
        <View style={styles.container}>
            {option.map((item) => (
                <MenuOption text={item.text} />
            ))}    
        </View>
    )
}

const AfterUniversityStack = createStackNavigator();

const AfterUniversity = ({ navigation }) => {
    return (
        <AfterUniversityStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <AfterUniversityStack.Screen
                name="AfterUniversityIndex"
                component={Index}
                options={{ title: 'SAU ĐẠI HỌC' }}
            />
        </AfterUniversityStack.Navigator>
    )
}

export default AfterUniversity;