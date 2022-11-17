import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Mongagua from './components/Mongagua';
import SP from './components/SP';
import Santos from './components/Santos';
import Peruibe from './components/Peruibe';
import Itanhaem from './components/Itanhaem';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mongagua" component={Mongagua} />
      <Stack.Screen name="SP" component={SP} />
      <Stack.Screen name="Santos" component={Santos} />
      <Stack.Screen name="Peruibe" component={Peruibe} />
      <Stack.Screen name="Itanhaem" component={Itanhaem} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}