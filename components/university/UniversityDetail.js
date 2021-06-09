import React from "react";
import { View, Text, Image, ScrollView, useWindowDimensions } from 'react-native';
import { List } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import HTML from "react-native-render-html";
import firebase from "@config";

import styles from "./styles";

const Info = ({ logo, name, nameEn, code, type, trainingSystem, address, phone, email, website, fb, vision, mission, structure, info2021 }) => {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const contentWidth = useWindowDimensions().width;

    return (
        <ScrollView>
            <Image source={require("@assets/images/school-banner/vku.jpg")} style={styles.banner} />
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={{width: '80%'}}>
                        <Text style={styles.schoolName}>{name}</Text>
                        <Text style={styles.courseName}>{nameEn}</Text>
                    </View>
                    <Image source={{uri: logo}} style={styles.logo2} />
                </View>
                <List.Section>
                    <List.Accordion
                        title="I. GIỚI THIỆU"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                        right={(props) => <List.Icon {...props} icon="equal" />}
                        expanded={expanded}
                        onPress={handlePress}
                        
                    >
                        <View style={styles.content}>
                            <Text style={styles.text}>Mã trường: {code}</Text>
                            <Text style={styles.text}>Loại trường: {type}</Text>
                            <Text style={styles.text}>Hệ đào tạo: {trainingSystem}</Text>
                            <Text style={styles.text}>Địa chỉ: {address}</Text>
                            <Text style={styles.text}>SĐT: {phone}</Text>
                            <Text style={styles.text}>Email: {email}</Text>
                            <Text style={styles.text}>Website: {website}</Text>
                            <Text style={styles.text}>Facebook: {fb}</Text>
                        </View>
                    </List.Accordion>
                    <List.Accordion
                        title="II. SỨ MẠNG - TẦM NHÌN"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >
                        {vision &&
                        <HTML source={{ html: vision }} contentWidth={contentWidth} /> }
                    </List.Accordion>
                    <List.Accordion
                        title="III. CHỨC NĂNG NHIỆM VỤ"
                        style={styles.list} 
                        titleStyle={styles.listTitle}
                    >
                        {mission &&
                        <HTML source={{ html: mission }} contentWidth={contentWidth} /> }
                    </List.Accordion>
                    <List.Accordion
                        title="IV. CƠ CẤU TỔ CHỨC"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >
                        {structure &&
                        <Image source={{uri: structure}} style={styles.structure} /> }
                    </List.Accordion>
                    <List.Accordion
                        title="V. THÔNG TIN TUYỂN SINH NĂM 2021"
                        style={styles.list}
                        titleStyle={styles.listTitle}
                    >
                        {info2021 &&
                        <HTML source={{ html: info2021 }} contentWidth={contentWidth} /> }
                    </List.Accordion>
                </List.Section>
            </View>
        </ScrollView>
    )
}

const UniversityDetail = ({ route }) => {

    const { shortName } = route.params;

    console.log(shortName);
    const db = firebase.database();

    const [loading, setLoading] = React.useState(false);
    const [info, setInfo] = React.useState('');

    const getData = () => {
        setLoading(true);
        const ref = db.ref(`/university/${shortName}`);

        ref.get().then(snapshot => {
            setInfo(snapshot.val());
            setLoading(false);
        }).catch(error => {
            console.log('Error', error);
            setLoading(false);
        });
    }

    React.useEffect(() => {
        getData();
    }, [])

    console.log(info);

    return (
        <>
            {!loading ? info ?
            <Info
                logo={info.logo}
                name={info.name}
                nameEn={info['name-en']}
                code={info['university-code']}
                type={info['university-type']}
                trainingSystem={info['training-system'][0]}
                address={info.address}
                phone={info['phone-number']}
                email={info.email}
                website={info.website}
                fb={info.facebook}
                vision={info.vision}
                mission={info.mission}
                structure={info.structure}
                info2021={info.info2021}
            /> : null
            : <View style={{display: 'flex', height: 500, justifyContent: 'center'}}><ActivityIndicator animating={true} size={50} /></View> }
        </>
    )
}

export default UniversityDetail;