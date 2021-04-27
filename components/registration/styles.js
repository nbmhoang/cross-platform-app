import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    fakeCarousel: {
        marginBottom: 26,
        width: '100%',
        height: undefined,
        aspectRatio: 1170/440,
        resizeMode: 'center'
    },
    menuOption: {
        flexDirection: 'row',
        height: 50,
        width: deviceWidth*0.8,
        marginLeft: deviceWidth*0.1,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15
    },
    menuIcon: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 20
    },
    menuText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    
    container: {
        padding: 10
    },
    textTitle: {
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#054770'
    },

    // Registration Form
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input1: {
        width: deviceWidth*0.3,
        backgroundColor: '#fff'
    },
    input2: {
        width: deviceWidth*0.46,
        backgroundColor: '#fff'
    },
    input3: {
        backgroundColor: '#fff'
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pickerView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AAAAAA',
        marginTop: 6
    },
    picker: {
        height: 40,
        fontSize: 16
    },
    half: {
        width: deviceWidth*0.45,
        textAlign: 'center'
    },
    text1: {
        fontSize: 16
    },
    text2: {
        fontSize: 14,
        fontStyle: 'italic',
        letterSpacing: 0.4,
        marginTop: 15,
        marginBottom: 15
    },
    text3: {
        fontSize: 12,
        color: '#054770',
        fontStyle: 'italic'
    },
    button: {
        flex: 0.49,
        marginBottom: 10
    },
    buttonRow: {
        flexDirection: 'row-reverse',
        marginTop: 10,
        marginBottom: 10
    },
    button1: {
        flex: 0.3
    }
})

export default styles;