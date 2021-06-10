import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({
    container: {
        paddingTop: 7,
        paddingLeft: 8,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        width: 51,
        height: 52
    },
    content: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        color: '#054770',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#FDD03F',
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    fakeCarousel: {
        marginBottom: 26,
        width: '100%',
        height: undefined,
        aspectRatio: 1170/440,
        resizeMode: 'center'
    },
    menuOption: {
        backgroundColor: '#054770',
        borderColor: '#000',
        borderWidth: 1,
        height: 48,
        display: 'flex',
        justifyContent: 'center'
    },
    menuOptionText: {
        marginLeft: 64,
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default homeStyle;