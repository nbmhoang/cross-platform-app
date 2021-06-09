import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    banner: {
        height: 113,
        width: "100%"
    },
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
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //width: '85%'
    },
    schoolName: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    courseName: {
        fontSize: 14,
        textTransform: 'uppercase'
    },
    logo2: {
        height: 50,
        width: 50,
        //alignSelf: 'flex-end'
    },
    list: {
        backgroundColor: '#054770',
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
    listTitle: {
        color: '#fff'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    text: {
        fontSize: 14,
        marginBottom: 5
    },
    structure: {
        width: '100%',
        height: 500,    
        resizeMode: 'contain'
    }
})

export default styles;