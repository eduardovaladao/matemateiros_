import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../screens/Inicio.js';
import Perfil from '../screens/Perfil.js';
import Fracoes from '../screens/fracoes/Fracoes.js';
import AdicaoSubtracao from '../screens/fracoes/AdicaoSubtracao.js';
import ExercioAdicaoSubtracao from '../screens/fracoes/ExerciciosAdicaoSubtracao.js';

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
            <Stack.Screen name='AdicaoSubtracao' component={AdicaoSubtracao} />
            <Stack.Screen name='ExercioAdicaoSubtracao' component={ExercioAdicaoSubtracao} />
        </Stack.Navigator>
    );
}