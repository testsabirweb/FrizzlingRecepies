import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'//it is different form 'HeaderButton' which is used in HeaderButton.js

import { RECEPIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton'

const RecepieDetailScreen = props => {
    const recepieId = props.navigation.getParam('recepieId');

    const selectedRecepie = RECEPIES.find(recepie => recepie.id === recepieId);

    return (
        <View style={styles.screen}>
            <Text>{selectedRecepie.title}</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    );
};

RecepieDetailScreen.navigationOptions = navigationData => {
    const recepieId = navigationData.navigation.getParam('recepieId');
    const selectedRecepie = RECEPIES.find(recepie => recepie.id === recepieId);
    return {
        headerTitle: selectedRecepie.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Favorite" iconName="ios-star-outline" onPress={() => {
                console.log('mark as favorite')
            }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecepieDetailScreen;