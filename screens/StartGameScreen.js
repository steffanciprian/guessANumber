import React, {useState} from 'react';
import {
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/input';
import NumberContainer from "../components/NumberContainer";


const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [chosenNumberValid, setChosenNumberValid] = useState(false);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ' '));
    }

    const resetButtonHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmButtonHandler = () => {
        let chosenNumber = enteredValue;
        Keyboard.dismiss()


        if (isNaN(parseInt(chosenNumber)) || chosenNumber === '' || parseInt(chosenNumber) === 0) {
            setEnteredValue('');
            setChosenNumberValid(false);
            Alert.alert("Not an ok number",
                'Number must be between 1 and 99!',
                [{
                    text: 'Ok', style: 'destructive',
                    onPress: resetButtonHandler
                }]);

        } else {
            setEnteredValue('');
            setChosenNumberValid(true);
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
        }
    }

    let confirmedOutput;
    if (confirmed && chosenNumberValid) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button title={"START GAME"}/>
            </Card>
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
                           keyboardType='number-pad'
                           maxLength={2}
                           onChangeText={numberInputHandler}
                           value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} color={colors.secondary} title='Reset'
                                onPress={resetButtonHandler}/>
                        <Button style={styles.button} color={colors.primary} title='Confirm'
                                onPress={confirmButtonHandler}/>
                    </View>
                </Card>
                {confirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    }

});

export default StartGameScreen;
