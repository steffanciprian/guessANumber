import React from "react";
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from "../components/Card";
import colors from "../constants/colors";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number!</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} color={colors.secondary} title="Reset"/>
                    <Button style={styles.button} color={colors.primary} title="Confirm"/>
                </View>
            </Card>
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
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 12,
        marginVertical: 10,
    },
    inputContainer: {
        width: 10000,
        maxWidth: '90%',
        alignItems: 'center',
    },
    button: {
        width: 100,
    }

});

export default StartGameScreen;
