import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ServiceAppointmentStack } from './src/ServiceAppointment';
import { AddServiceStack } from './src/AddService';

import { MyScheduleStack } from './src/MySchedule';
import { LoginScreen } from './src/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContextProvider } from './src/AuthContextProvider';
import { LoginStack } from './src/Login';
import { ThemeProvider } from 'react-native-elements';

if (__DEV__) {
  const ignoreWarns = [
    "ViewPropTypes will be removed from React Native",
  ];

  const error = console.error;
  console.error = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    error(...arg);
  };

  // LogBox.ignoreLogs(ignoreWarns);
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthRote = () =>
  <Drawer.Navigator initialRouteName="ServiceAppointmentStack">
    <Drawer.Screen name="ServiceAppointmentStack" component={ServiceAppointmentStack} />
    <Drawer.Screen name="AddService" component={AddServiceStack} />
    <Drawer.Screen name="Schedule" component={MyScheduleStack} />
  </Drawer.Navigator>

function AppDrawer() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Login" component={LoginStack} />
            <Stack.Screen name="App" component={AuthRote} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default AppDrawer;