import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from "@config";
import MakeQuestion from './MakeQuestion';
import styles from './styles';

const Question = ({question, answer}) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.question}><MaterialCommunityIcons name="help-circle" color="#054770" size={24} /> {question}</Text>
            <Text style={styles.ansText}>Trả lời:</Text>
            <Text style={styles.answer}>{answer}</Text>
        </View>
    )
}

const FAQ = ({ navigation }) => {

    const [loading, setLoading] = React.useState(false);
    const [questions, setQuestions] = React.useState([]);

    const db = firebase.database();
    const ref = db.ref(`/faq`);

    const getData = () => {
        setLoading(true);
        ref.get().then(snapshot => {
            const list = [];
            snapshot.forEach(question => {
                // Get question that answered only
                if (question.hasChild('answer')) {
                    list.push({
                        questionId: question.key,
                        ...question.val()
                    })
                }
            })
            setQuestions(list);
            setLoading(false);
        }).catch(error => {
            // console.log('An error occur when fetching question', error);
            setLoading(false);
        });
        
    }

    React.useEffect(() => {

        getData();

    }, [])

    return (
        <>
            {!loading ? questions &&
                <>
                <ScrollView style={styles.container}>
                    {questions.map((item, index) => (
                        <Question key={item.questionId} question={item.question} answer={item.answer} />
                    ))}
                </ScrollView>
                </> : <View style={{display: 'flex', height:'100%', justifyContent: 'center'}}><ActivityIndicator animating={true} size={50} /></View>}
            
            <MaterialCommunityIcons name='plus-circle' style={styles.addQuestion} color='#054770' size={60} onPress={() => navigation.navigate('MakeQuestion')} />
        </>
    )
}

const FAQStack = createStackNavigator();

const FAQScreen = ({ navigation }) => {

    return (
        <FAQStack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, backgroundColor: '#054770' },
                headerTitleStyle: { fontSize: 14 },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: '#fff' },
                headerLeft: () => ( <MaterialCommunityIcons name="chevron-left" onPress={() => navigation.pop()} size={24} color="white" style={{padding: 15}}/> )
            }}
        >
            <FAQStack.Screen
                name="FAQ"
                component={FAQ}
                options={{ title: 'HỎI ĐÁP THÔNG TIN TUYỂN SINH'}}
            />
            <FAQStack.Screen
                name="MakeQuestion"
                component={MakeQuestion}
                options={{headerShown: false}}
            />
        </FAQStack.Navigator>
    )
}

export default FAQScreen;