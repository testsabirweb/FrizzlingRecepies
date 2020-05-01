import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Linking } from 'expo';


import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText';

const ContactUsScreen = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    const handelMail = (e) => {
        Linking.openURL('mailto:testsabirweb@gmail.com');
    }

    const handelGit = (e) => {
        Linking.openURL('https://github.com/testsabirweb/FrizzlingRecepies');
    }

    return (
        <View style={styles.screen}>
            <DefaultText>For any suggestions and feedback mail us at</DefaultText>
            <TouchableCmp style={{ flex: 1 }} onPress={handelMail}>
                <View style={styles.gmail}>
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Menu' iconName='ios-mail' iconSize={40} />
                    </HeaderButtons>
                    <Text>testsabirweb@gmail.com</Text>
                </View>
            </TouchableCmp>
            <DefaultText>or suggest me by forking at github repo</DefaultText>
            <TouchableCmp style={{ flex: 1 }} onPress={handelGit}>
                <View style={styles.github}>
                    <HeaderButtons
                        HeaderButtonComponent={HeaderButton}>
                        <Item title='Menu' iconName='logo-github' color="black" iconSize={40}/>
                    </HeaderButtons>
                    <Text>https://github.com/testsabirweb/FrizzlingRecepies</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

ContactUsScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Contact Us',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    }
}


const styles = StyleSheet.create({
    screen: {
        margin: 20,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    gmail: {
        backgroundColor: '#4da6ff',
        padding: 20,
        marginTop: 10,
        marginBottom: 80,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        alignItems: 'center',
        width: 250,
        elevation: 5,
        height: 110
    },
    github: {
        backgroundColor: '#cccccc',
        padding: 20,
        marginTop: 10,
        marginBottom: 80,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        alignItems: 'center',
        width: 250,
        elevation: 5,
        height: 110
    }
});

export default ContactUsScreen;