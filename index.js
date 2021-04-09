import 'react-native-gesture-handler';
import * as React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { name as appName } from './app.json';
import Home from "./components";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
        <PaperProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#fff' }
        }}>
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        </Stack.Navigator>
        </PaperProvider>
    </NavigationContainer>
  );
}

registerRootComponent(Main)