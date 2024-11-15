import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

import PerfilHeader from '../components/Perfilheader.js';
import PerfilFooter from '../components/PerfilFooter.js';

const Perfil = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PerfilHeader />
            <Text style={{
                color: '#fafafa',
                fontSize: 30,
                textAlign: 'center',
                marginVertical: 0,
            }}>Boas-vindas, Usuário</Text>
            <View style={styles.buttons}>
                <Pressable
                    onPress={() => navigation.navigate('Fracoes')}
                    style={styles.btn}>
                    <Text style={styles.btnText}>Frações</Text>
                </Pressable>
            </View>
            <PerfilFooter navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#141414',
    },    
    buttons: {
    },
    btn: {
        width: 180,
        backgroundColor: '#8423fb',
        padding: 18,
        borderRadius: 22,
        alignSelf: 'center',
    },
    btnText: {
        textAlign: 'center',
        color: '#fafafa',
        backgroundColor: '#ad6aff',
        borderRadius: 18,
        padding: 5,
        fontSize: 30,
    },
});

export default Perfil;