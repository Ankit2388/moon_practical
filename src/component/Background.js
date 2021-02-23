import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { main_bg } from '../assets'
import abc from '../assets/images/0_Splash Screen.png'

let { width, height } =  Dimensions.get('window')


const Background = (props) => {
    return (
        <ImageBackground source = {main_bg}  style = {{width : width, height : height}} >
            {props.children}
        </ImageBackground>
    )
}

export default Background

const styles = StyleSheet.create({})
