import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                //style={styles.img}
            />
            <Text style={[styles.text, {fontSize: 40}]}>Matemateiros_</Text>
            <Pressable
                onPress={() => navigation.navigate('Perfil')}
                style={styles.btn}
            >
                <Text style={[styles.text, {fontSize: 25}]}>Começar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141414',
    },
    text: {
        textAlign: 'center',
        color: '#fafafa',
    },
    btn: {
        width: 180,
        backgroundColor: '#8423fb',
        padding: 20, 
        marginTop: 50,
        borderRadius: 18,
    },
    btnText: {
        textAlign: 'center',
        color: '#fafafa',
    },
});

export default Inicio;