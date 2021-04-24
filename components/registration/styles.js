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
    }
})

export default styles;