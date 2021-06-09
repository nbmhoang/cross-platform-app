import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 20
    },
    title2: {
        fontSize: 18,
        // fontWeight: 'bold',
        textAlign: 'justify',
        lineHeight: 25,
        marginTop: 10,
        marginBottom: 10
    },
    time: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#606060'
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    },

    // Detail
    detailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#054770',
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 15
    },
    detailContent: {
        marginTop: 10,
        paddingBottom: 20
    },
    detailContentText: {
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'justify'
    },
    detailTime: {
        fontSize: 10,
        fontStyle: 'italic',
        textAlign: 'right',
        marginBottom: 10
    },
    detailTitle2: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 20
    },
    relatedNews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    relatedNewsItem: {
        width: deviceWidth*0.45,
        marginRight: 15
    },
    relatedNewsImage: {
        borderWidth: 1,
        borderColor: '#000',
        width: deviceWidth*0.45,
        height: 91
    },
    relatedNewsTitle: {
        fontSize: 12,
        lineHeight: 17,
        textAlign: 'justify',
        paddingTop: 10,
        fontWeight: 'bold'
    },
    newSeperator: {
        marginTop: 9,
        marginBottom: 15
    },
    newCover: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#C5C5C5',
        resizeMode: 'center'
    }
})

export default styles;