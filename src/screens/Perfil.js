import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilHeader = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/logo.png')}
                resizeMode='cover'
                style={styles.logoIcon}
            />
            <Text>Perfil</Text>
        </View>
    );
}

const Perfil = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PerfilHeader />
            <Text>Bem-vindo, Usuário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
    },
    header: {
        flexDirection: 'row'
    },
    logoIcon: {
        width: 70,
        height: 70,
    }
});

export default Perfil;