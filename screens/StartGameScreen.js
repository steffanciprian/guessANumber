import React, {useState} from "react";
import {View, StyleSheet, Text, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/input";

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ' '));
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number!</Text>
                <Input stle={styles.input}
                       blurOnSubmit
                       autoCapitalize='none'
                       autoCorrect={false}
                       keyboardType="number-pad"
                       maxLength={2}
                       onChangeText={numberInputHandler}
                       value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} color={colors.secondary} title="Reset"/>
                    <Button style={styles.button} color={colors.primary} title="Confirm"/>
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
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
        width: '100%',
        maxWidth: '100%',
        alignItems: 'center',
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        maxWidth: 40,
        textAlign: 'center'
    }

});

export default StartGameScreen;
