import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyScheduleScreen } from './MyScheduleScreen';
import { AddScheduleRecordScreen } from './AddScheduleRecord';
import { GreetingScreen } from './GreetingScreen';
import { LoginScreen } from './LoginScreen';
import { SignUp } from './SignUp';


const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Greeting" component={GreetingScreen} />
      <Stack.Screen name="SelectLoginWay" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export { LoginStack };