
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ManicuristInfoScreen } from './ManicuristInfoScreen';
import { RequestAppointmentScreen } from './RequestAppointmentScreen';
import { SelectServicesScreen } from './SelectServicesScreen';
import { ConfirmRequestScreen } from './ConfirmRequestScreen';
import { ServiceScreen } from './MapCarouselScreen';

const Stack = createNativeStackNavigator();

function ServiceAppointmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ServiceScreen} />
      <Stack.Screen name="ManicuristInfo" component={ManicuristInfoScreen} />
      <Stack.Screen name="SelectServices" component={SelectServicesScreen} />
      <Stack.Screen name="RequestAppointment" component={RequestAppointmentScreen} />
      <Stack.Screen name="ConfirmRequest" component={ConfirmRequestScreen} />
    </Stack.Navigator>
  );
}

export { ServiceAppointmentStack };