import { View, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const PerfilFooter = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Perfil') }}>
                <Image
                    source={require('../assets/simbolos.png')}
                    style={styles.icon}
                    resizeMode='cover'
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../assets/engrenagem.png')}
                    style={styles.icon}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        position: 'absolute',
        bottom: 0,
    },
    icon: {
        fontSize: 24,
    }
});

export default PerfilFooter;