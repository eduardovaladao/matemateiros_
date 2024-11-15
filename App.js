import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './src/screens/Inicio.js';
import Perfil from './src/screens/Perfil.js';
import Fracoes from './src/screens/fracoes/Fracoes.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Inicio' component={Inicio} />
                <Stack.Screen name='Perfil' component={Perfil} />
                <Stack.Screen name='Fracoes' component={Fracoes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}