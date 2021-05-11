import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    centerContainer: {
        padding: 10,
        height: '100%',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 15
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 5
    },
    forgetPw: {
        color: '#00659D',
        fontSize: 16,
        textAlign: 'right',
        marginBottom: 10
    },
    button: {
        marginTop: 5,
        marginBottom: 200
    },
    redButton: {
        backgroundColor: '#EA4335',
        marginTop: 10,
        marginBottom: 10
    },
    changePwButton: {
        marginTop: 20
    },
    text: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    text2: {
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 10
    },
    text3: {
        fontSize: 16
    },
    register: {
        color: "#0038FF",
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    // Profile
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    profileContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    text4: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.4,
        marginBottom: 20
    },
    labelButton: {
        fontSize: 12,
        marginLeft: 5,
        marginRight: 5
    },
    input2: {
        backgroundColor: '#fff',
        marginBottom: 15
    },

})

export default styles;