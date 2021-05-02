import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10
    }, 
    questionContainer: {
        fontSize: 16,
        padding: 10
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    ansText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    answer: {
        fontSize: 16,
        textAlign: 'justify'
    },
    addQuestion: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: '#fff',   
        borderRadius: 100                                       
    },

    // MakeQuestion
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    detail: {
        fontSize: 10,
        paddingTop: 5
    },
    input: {
        fontSize: 16,
        height: 40,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 7
    },
    questionInput: {
        fontSize: 16,
        height: 170,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 5,
        paddingLeft: 5,
        marginTop: 7,
        marginBottom: 10
    }
})

export default styles;