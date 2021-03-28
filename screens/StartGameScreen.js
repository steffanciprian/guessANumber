import React from "react";
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number!</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button style={styles.myButton} title="Reset"/>
                    <Button style={styles.myButton} title="Confirm"/>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 12,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    myButton:{
        width:'40%',
    }

});

export default StartGameScreen;
