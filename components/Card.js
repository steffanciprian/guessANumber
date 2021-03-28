import React from 'react';
import {View, Text} from 'react-native';

const Card = () => {

};

const styles = StyleSheet.create({
    card:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:20,
        padding: 15,
        borderRadius:10,
    }
});

export default Card;
