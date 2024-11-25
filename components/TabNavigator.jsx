import A from '../screens/A';
import B from '../screens/B';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator (){
    return (
        <Stack.Navigator
            initialRouteName="A"
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen
                options={{
                    unmountOnBlur: true,
                }}
                name='A'
                component={A}
            />

            <Stack.Screen
                options={{
                    unmountOnBlur: true,
                }}
                name='B'
                component={B}
            />
        </Stack.Navigator>
    )
}