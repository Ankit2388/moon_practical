import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'

const styles = StyleSheet.create({
    safeArea : {
        flex : 1,     
    },
    container : {
        flex : 1
    },
    logoLayout : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        // backgroundColor : 'green'
    },
    content : {
        flex : 1.2,
        justifyContent : 'flex-end',
        paddingBottom : 30
        // backgroundColor : 'red'
    },
    loginBtn : {
        alignItems : 'center',
        width : '95%',
        // backgroundColor : 'red',
        alignSelf : 'center'
    },
    row : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    dividerLayout : {
        width : '95%',
        alignSelf : 'center',
        marginVertical : 30,
        justifyContent : 'center'
        // backgroundColor : 'red'
    },
    divider : {
        borderWidth : 0.5,
        borderColor : Color.black,
        width : '30%',
        marginHorizontal : 15
    },
    column : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    signUpTxt : {
        fontSize : 16,
        fontWeight : 'bold',
        color : Color.black
    },
    txt : {
        fontSize : 16,
        color : Color.black
    }

})

export default styles