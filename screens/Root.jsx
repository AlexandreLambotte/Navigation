import { StyleSheet, Text, View } from "react-native";

export default function RootNavigation() {
    return (
        <View style={StyleSheet.container}>
            <Text>Root Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Le conteneur occupe tout l'espace
        backgroundColor: '#fff',
        alignItems: 'center', // Centre horizontalement
        justifyContent: 'center', // Centre verticalement
    },
});
