import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import A from './screens/A';
import B from './screens/B';
import RootNavigation from './screens/Root';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="A" screenOptions={{headerShown: false }}>
        <Tab.Screen name="A" component={A} />
        <Tab.Screen name="B" component={B} />
        <Tab.Screen name="Root" component={RootNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
