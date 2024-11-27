import { AppNavigator } from './src/navigation/AppNavigator';
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