import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import MakeQuestion from './MakeQuestion';

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
    const questionData = [
        {
            question: 'Thí sinh đăng ký 5 nguyện vọng vào nhiều ngành thuộc nhiều trường khác nhau thì đăng ký bằng nhiều phiếu riêng hay trong 1 phiếu chung?',
            answer: 'Thí sinh được đăng ký tối đa 05 nguyện vọng trong 01 đơn đăng ký xét tuyển trong một trường hoặc nhiều trường khác nhau thuộc ĐHĐN. Các đơn ĐKXT nộp sau (tính theo dấu bưu điện) được xem không hợp lệ và không được xét.'
        },
        {
            question: 'Thí sinh chưa đăng ký hết 5 nguyện vọng, muốn đăng ký bổ sung các nguyện vọng còn lại được không?',
            answer: 'Mỗi thí sinh chỉ nộp 01 hồ sơ ĐKXT. Thí sinh không được bổ sung nguyện vọng đăng ký, không được điều chỉnh nguyện vọng sau khi đã nộp hồ sơ. Trường hợp thí sinh nộp nhiều hơn 01 hồ sơ ĐKXT thì các hồ sơ nộp sau (tính theo thời điểm nộp) không được xét.',
        },
        {
            question: 'Thí sinh chưa tốt có bằng nghiệp THPT có thể nộp hồ sơ đăng ký xét tuyển?',
            answer: 'Thí sinh có thể nộp hồ sơ ĐKXT khi chưa có chứng nhận tốt nghiệp tạm thời (xét tuyển đợt 1 đối với thí sinh tốt nghiệp năm 2019) và bổ sung bản photocopy chứng nhận tốt nghiệp tạm thời trước ngày hết hạn nộp hồ sơ theo thông báo tuyển sinh để được xét tuyển.',
        },
        {
            question: 'Thí sinh có thể nộp hồ sơ ĐKXT ở đâu? Nộp bổ sung chứng nhận tốt nghiệp THPT và các giấy tờ bổ sung khác ở đâu?',
            answer: 'Thí sinh có thể trực tiếp nộp hồ sơ ĐKXT hoặc gửi qua đường bưu điện đến một trong các điạ chỉ sau của Đại học Đà Nẵng. Thí sinh nộp hồ sơ ĐKXT ở đâu thì nộp bổ sung Chứng nhận tốt nghiệp THPT và các giấy tờ bổ sung khác tại đó.',
        },
    ]
    return (
        <>
            <ScrollView style={styles.container}>
                {questionData.map((item, index) => (
                    <Question key={index} question={item.question} answer={item.answer} />
                ))}
            </ScrollView>
            <MaterialCommunityIcons name='plus-circle' style={styles.addQuestion} color='#054770' size={60} onPress={() => navigation.navigate('MakeQuestion')} />
        </>
    )
}

const FAQStack = createStackNavigator();

const FAQScreen = () => {

    return (
        <FAQStack.Navigator>
            <FAQStack.Screen
                name="FAQ"
                component={FAQ}
                options={{headerShown: false}}
            />
            <FAQStack.Screen
                name="MakeQuestion"
                component={MakeQuestion}
                options={{headerShown: false}}
            />
        </FAQStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft:10,
        paddingRight: 10,
        paddingTop: 10
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
    }
})

export default FAQScreen;