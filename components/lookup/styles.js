import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        fontSize: 16,
        height: 40,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 10
    },
    pickerView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AAAAAA',
        marginTop: 15,
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
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
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
    }
})

export default styles;