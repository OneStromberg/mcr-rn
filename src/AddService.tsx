
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddServiceScreen } from './AddServiceScreen';
import { AddServicePointOnMap } from './AddServicePointOnMapScreen';
import { AddServiceConfirmationScreen } from './AddServiceConfirmationScreen';

const Stack = createNativeStackNavigator();

function AddServiceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddServiceSelectr" component={AddServiceScreen} />
      <Stack.Screen name="AddServicePointOnMap" component={AddServicePointOnMap} />
      <Stack.Screen name="AddServiceConfirmation" component={AddServiceConfirmationScreen} />
    </Stack.Navigator>
  );
}

export { AddServiceStack };