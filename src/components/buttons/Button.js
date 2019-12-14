import React from "react"
import {View, Text, StyleSheet} from "react-native"

const Button = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#1c4d80",
        width: 130,
        borderRadius: 20,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: 14,
        color: "#fafafa",
    }
})

export default Button

