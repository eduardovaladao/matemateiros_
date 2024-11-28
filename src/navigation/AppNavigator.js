import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../navigation/StackNavigator';

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}