import { View, Text, StyleSheet } from 'react-native';

export default function Box({ children, style }) {
    return (
    <View style={[styles.box, style]}>
        <View style={styles.textBG}>
            <Text style={styles.text}>{children}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        padding: 20,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    textBG: {
        backgroundColor: "black",
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});