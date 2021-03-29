import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from "../constants/colors";

const Input = (props)=>
{
    return <TextInput {...props} style ={{...styles.input, ...props.style}}/>


}

const styles = StyleSheet.create({
    input:{
        height:20,
        borderBottomColor: colors.primary,
        borderBottomWidth:2,
        marginVertical:10,
        width:30,
        textAlign:'center'

    }
})
export default Input;
