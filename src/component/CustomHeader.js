import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../theme/Color'

const CustomHeader = () => {
    return (
        <View style = {styles.container}>
            <Icon name = 'arrow-back' />            
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        height : 70,
        backgroundColor : 'transparent',
        // backgroundColor : 'red'
    },
    iconStyle : {
        color : Color.white ,
        fontSize : 16
    }
})
