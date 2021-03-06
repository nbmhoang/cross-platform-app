import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    centerContainer: {
        height: '100%',
        justifyContent: 'center'
    },
    input: {
        fontSize: 16,
        height: 40,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 15
    },
    pickerView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AAAAAA',
        marginBottom: 15
    },
    picker: {
        height: 40,
        fontSize: 16
    },
    courseContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    logo: {
        height: 84,
        width: 84,
        marginRight: 10
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        width: deviceWidth-110
    },
    text: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5
    },
    text1: {
        fontSize: 18,
        width: deviceWidth-110
    },
    text3: {
        fontSize: 18
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

    // CourseInfo
    banner: {
        height: 113,
        width: "100%"
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    schoolName: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    courseName: {
        fontSize: 14,
        textTransform: 'uppercase'
    },
    logo2: {
        height: 50,
        width: 50
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

    //EnrollmentResult
    enrollContainer: {
        marginTop: 20
    },
    enrollTitle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10
    },
    text2: {
        fontSize: 16,
        marginBottom: 5
    },
    subjectsTable: {
        marginBottom: 20
    },
    resultTextPassed: {
        padding: 5,
        fontSize: 24,
        textTransform: 'uppercase',
        color: "#3de334",
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    resultTextFailed: {
        padding: 5,
        fontSize: 24,
        textTransform: 'uppercase',
        color: "#db3737",
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})

export default styles;