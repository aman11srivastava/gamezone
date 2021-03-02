import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

export default function FlatButton({ text, handleButtonPress }){
    return (
        <TouchableOpacity onPress = {handleButtonPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#03c6fc'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})