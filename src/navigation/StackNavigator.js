import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../screens/Inicio.js';
import Perfil from '../screens/Perfil.js';
import Fracoes from '../screens/fracoes/exerciciosFracoes.js';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Inicio'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Inicio' component={Inicio} />
            <Stack.Screen name='Perfil' component={Perfil} />
            <Stack.Screen name='Fracoes' component={Fracoes} />
        </Stack.Navigator>
    );
}