import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Color } from '../theme/Color'
import Icon from 'react-native-vector-icons/Ionicons';


export const SimpleButton = (props) => {

    const {title, btnHandler } = props

    let btnStyle = {...styles.btnLayout, ...props.btnLayout}
    let btnTxt = {...styles.btnTxt, ...props.btnTxtStyle}
    return (
        <TouchableOpacity onPress = {btnHandler} style = {btnStyle}>
            <Text style = {btnTxt} >{title}</Text>
        </TouchableOpacity>
    )
}

export const ButtonWithIcon = (props) => {

    const {title, iconName, btnHandler } = props

    let btnStyle = {...styles.btnLayout, ...props.btnLayout}
    let btnTxt = {...styles.btnTxt, ...props.btnTxtStyle}
    return (
        <TouchableOpacity onPress = {btnHandler} style = {btnStyle}>
            <Icon name = {iconName} style = {styles.iconStyle} />
            <Text style = {btnTxt} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnLayout : {
        width : '95%',
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        backgroundColor : Color.blue,
        borderRadius : 12,
        flexDirection : 'row'
    },
    btnTxt : {
        color : Color.white,
        fontSize : 14
    },
    iconStyle : { 
        fontSize : 14,
        color : Color.white,
        marginRight : 10
    }
})
