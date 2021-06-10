import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Notification = () => {
    return (
        <View>
            <Text style={{color: '#999999', textAlign: 'center'}}>Không có thông báo nào</Text>
        </View>
    )
}

const NotificationStack = createStackNavigator();

const NotificationScreen = ({ navigation }) => {
    return (
        <NotificationStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <NotificationStack.Screen
                name="Notification"
                component={Notification}
                options={{ title: 'THÔNG BÁO' }}
            />
        </NotificationStack.Navigator>
    )
}

export default NotificationScreen;