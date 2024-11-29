import { View, Image, Pressable, StyleSheet } from 'react-native';

const PerfilFooter = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <Pressable
                onPress={() => { navigation.navigate('Perfil') }}>
                <Image
                    source={require('../assets/simbolos.png')}
                    style={styles.icon}
                    resizeMode='cover'
                />
            </Pressable>
            <Pressable>
                <Image
                    source={require('../assets/engrenagem.png')}
                    style={styles.icon}
                    resizeMode='cover'
                />
            </Pressable>
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
        width: 50,
        height: 50,
    }
});

export default PerfilFooter;