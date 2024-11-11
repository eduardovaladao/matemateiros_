import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './src/screens/Inicio.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Início" component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}