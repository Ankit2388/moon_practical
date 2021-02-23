import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Background } from '../../component'
import styles from './Style';
import { logo } from '../../assets'

const Splash = () => {
    return (
        <View>            
            <Background>
                <View style = {styles.container}>
                    <Image source = {logo} />
                </View>
            </Background>
        </View>
    )
}

export default Splash


