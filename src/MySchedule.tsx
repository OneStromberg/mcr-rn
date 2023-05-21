import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyScheduleScreen } from './MyScheduleScreen';
import { AddScheduleRecordScreen } from './AddScheduleRecord';


const Stack = createNativeStackNavigator();

function MyScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyScheduleReview" component={MyScheduleScreen} />
      <Stack.Screen name="AddScheduleRecord" component={AddScheduleRecordScreen} />
    </Stack.Navigator>
  );
}

export { MyScheduleStack };