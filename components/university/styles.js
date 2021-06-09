import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor: '#AEAEAE'
    },
    logo: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
        width: 270
    },
    text2: {
        fontSize: 10,
        fontStyle: 'italic',
        marginLeft: 3,
        width: 260
    }
})

export default styles;