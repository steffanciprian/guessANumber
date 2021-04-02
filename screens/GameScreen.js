import React,
{useState, useRef} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGameHandler = direction => {
        if ((currentGuess < props.userChoice &&  direction ==='lower')
            || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong', [{text: 'Sorry', style: 'destructive',}])
            return;

        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else if (direction === 'higher') {
            currentLow.current = currentGuess;
        }
        setCurrentGuess(generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess));


    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGameHandler.bind(this, 'lower')}/>
                <Button title="HIGHER" onPress={nextGameHandler.bind(this, 'higher')}/>
            </Card>
        </View>
    )


}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;
