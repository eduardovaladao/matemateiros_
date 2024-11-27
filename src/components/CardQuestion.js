import { Text, View, Pressable, StyleSheet } from "react-native";

export const CardQuestion = ({ Navigation }) => (
    <View style={styles.container}>
        <Text style={styles.highlightedQuestion}>{item.pergunta}</Text>
        <View style={styles.optionsContainer}>
            <Pressable
            onPress={() => NavigationPreloadManager.navigate('Inicio')}>
                <Text>OI</Text>
            </Pressable>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141414',
    }
});