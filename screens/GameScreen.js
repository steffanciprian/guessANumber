import React,
{useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from "react-native";

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exc) {
        return generateRandomNumberBetween(int, min, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, props.userChoice));


}

const styles = StyleSheet.create({});

export default GameScreen;
