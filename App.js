import AppNavigator from './src/navigation/AppNavigator.js';
import { View } from 'react-native';

export default function App() {
    return (
        <View
            style={{
                flex: 1,
            }}>
            <AppNavigator />
        </View>
    );
}