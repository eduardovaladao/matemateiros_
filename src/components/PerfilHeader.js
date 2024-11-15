import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilHeader = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/logo.png')}
                resizeMode='cover'
                style={styles.logo}
            />
            <Text style={styles.headerText}>Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        position: 'absolute',
        top: 0,
        backgroundColor: '#141414',
    },
    logo: {
        width: 80,
        height: 80,
        position: 'absolute',
        zIndex: 999,
        left: 40,
        top: 40
    },
    headerText: {
        textAlign: 'center',
        color: '#fafafa',
        fontSize: 20,
    },
});

export default PerfilHeader;