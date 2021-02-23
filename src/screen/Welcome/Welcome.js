import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './Style';
import {Background, ButtonWithIcon} from '../../component';
import {logo, facebook, google, insta} from '../../assets';

const Welcome = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Background>
        <View style={styles.container}>
          <View style={styles.logoLayout}>
            <Image source={logo} />
          </View>
          <View style={styles.content}>
            <View style = {styles.loginBtn}>
              <ButtonWithIcon iconName = 'call' btnHandler = {() => props.navigation.navigate('Login')} title="Login with Phone" />
            </View>
            <View style = {[styles.row, styles.dividerLayout]}>
                <View style = {styles.divider} />
                <Text>OR</Text>
                <View style = {styles.divider} />
            </View>
            <View style = {[styles.row, {marginBottom : 30}]}>
                <View style = {styles.column} >
                    <TouchableOpacity>
                        <Image source = {google} />
                    </TouchableOpacity>
                </View>
                <View style = {styles.column} >
                    <TouchableOpacity>
                        <Image source = {facebook} />
                    </TouchableOpacity>
                </View>
                <View style = {styles.column} >
                    <TouchableOpacity>
                        <Image source = {insta} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {[styles.row, {justifyContent : 'center'}]}>
                <Text style = {styles.txt}>Don't have an account? </Text>
                <Text style = {styles.signUpTxt} >Sign Up</Text>
            </View>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default Welcome;
