import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props) => {
    return <View
        style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 20,
        padding: 15,
        borderRadius: 10,
    }
});

export default Card;
