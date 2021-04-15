import 'react-native-gesture-handler';
import * as React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { name as appName } from './app.json';
import Home from "./components";
import News from "./components/news";
import Setting from "./components/setting";
import Search from "./components/search";
import FAQ from "./components/faq";
import Notification from "./components/notification";


const HomeStackScreen = () => {

  const Tab = createBottomTabNavigator();;

  return (
      <Tab.Navigator>
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarLabel: 'Trang chính',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Tra cứu',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="file-find-outline" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="FAQ"
            component={FAQ}
            options={{
              tabBarLabel: 'Hỏi đáp TS',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="help-circle-outline" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarLabel: 'Thông báo',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
              tabBarLabel: 'Cài đặt',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
              )
            }} />
      </Tab.Navigator>
  )

}



export default function Main() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <PaperProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#fff' }
        }}>
            <Stack.Screen options={{headerShown: false}} name="Index" component={Home} />
            <Stack.Screen name="Home" component={HomeStackScreen} />
        </Stack.Navigator>
        </PaperProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main)