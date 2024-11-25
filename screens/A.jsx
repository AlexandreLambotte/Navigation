import { StyleSheet, Text, View } from "react-native";

export default function A() {
    return (
        <View style={StyleSheet.container}>
            <Text>A Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});