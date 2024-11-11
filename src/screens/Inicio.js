import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logoMatemateiros.svg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Inicio;