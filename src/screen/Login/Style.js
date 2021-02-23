import { StyleSheet } from 'react-native'
import { Color } from '../../theme/Color'

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        justifyContent : 'center',
        alignItems : 'center'
    },
    safeArea : {
        flex : 1
    },
    headerLayout : {
        flex : 0.5,
        width : '100%',
        
        backgroundColor : 'blue'
    },
    content : {
        flex : 1,
        width : '100%',
    },
    headerTitle : {
        fontSize : 35,
        color :  Color.white
    },
    titleLayout : {
        marginLeft : 25,
        justifyContent : 'center',        
        flex : 1
    }
})

export default styles