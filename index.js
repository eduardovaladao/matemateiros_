import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';
import App from './App';

LogBox.ignoreLogs(['Require cycle: node_modules/victory-native']);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);