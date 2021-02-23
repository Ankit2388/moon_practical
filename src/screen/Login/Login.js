import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import styles from './Style'
import { main_bg } from '../../assets'
import { CustomHeader } from '../../component'

const Login = () => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style = {styles.container} >
                <View style = {styles.headerLayout}>                    
                    <ImageBackground source = {main_bg} imageStyle = {{opacity : 0.5 }} resizeMode = 'cover' style = {{width : '100%', height : '100%'}} >
                        <CustomHeader />
                        <View style = {styles.titleLayout}>
                            <Text style = {styles.headerTitle}>
                                Hi,
                            </Text>
                            <Text style = {styles.headerTitle}>Welcome</Text>
                        </View>
                    </ImageBackground>                                                        
                </View>
                <View style = {styles.content}>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login


