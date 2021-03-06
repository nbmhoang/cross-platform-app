import 'react-native-gesture-handler';
import * as React from 'react';
import { registerRootComponent } from 'expo';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme as NativeTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import momentjs from "moment";

import { name as appName } from './app.json';
import Home from "./components";
import NewsScreen from "./components/news";
import SettingScreen from "./components/setting";
import LookupScreen from "./components/lookup";
import FAQScreen from "./components/faq";
import NotificationScreen from "./components/notification";
import Registration from "@components/registration";
import AfterUniversity from './components/after-university';
import University from './components/university';
import Account from './components/account';


momentjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s trước",
    s  : 'vài giây trước',
    ss : '%d giây',
    m:  "1 phút",
    mm: "%d phút",
    h:  "1 giờ",
    hh: "%d giờ",
    d:  "1 ngày",
    dd: "%d ngày",
    w:  "1 tuần",
    ww: "%d tuần",
    M:  "1 tháng",
    MM: "%d tháng",
    y:  "a năm",
    yy: "%d năm"
  }
})

const HomeStackScreen = () => {

  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#fff'
          }
        }}
      >
          <Tab.Screen
            name="News"
            component={NewsScreen}
            options={{
              tabBarLabel: 'Trang chính',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="Lookup"
            component={LookupScreen}
            options={{
              tabBarLabel: 'Tra cứu',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="file-find-outline" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="FAQ"
            component={FAQScreen}
            options={{
              tabBarLabel: 'Hỏi đáp TS',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="help-circle-outline" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              tabBarLabel: 'Thông báo',
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
              )
            }} />
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
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

  const fontConfig = {
    web: {

    },
    android: {
      regular: {
        fontFamily: 'Roboto'
      }
    }
  }

  const theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: '#054770',
      accent: '#054770',
    },
    fonts: configureFonts(fontConfig)
  }

  const defaultNavigationTheme = {
    ...NativeTheme,
    colors: {
      ...NativeTheme.colors,
      background: '#fff'
    }

  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={defaultNavigationTheme}>
        <PaperProvider theme={theme}>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0, backgroundColor: '#054770'},
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#fff' }
        }}>
            <Stack.Screen options={{headerShown: false}} name="Index" component={Home} />
            <Stack.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}} />
            <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
            <Stack.Screen name="AfterUniversity" component={AfterUniversity} options={{headerShown: false}} />
            <Stack.Screen name="University" component={University} options={{headerShown: false}} />
            <Stack.Screen name="Account" component={Account} options={{headerShown: false}} />
        </Stack.Navigator>
        </PaperProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main)