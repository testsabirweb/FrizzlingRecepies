import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'//it is different form 'HeaderButton' which is used in HeaderButton.js

import { RECEPIES } from '../data/dummy-data';
import DefaultText from '../components/DefaultText'
import HeaderButton from '../components/HeaderButton'

const RecepieDetailScreen = props => {
    const recepieId = props.navigation.getParam('recepieId');

    const selectedRecepie = RECEPIES.find(recepie => recepie.id === recepieId);

    const RecepieItem = (props) => {
        return (
            <View style={styles.recepieItem}>
                <DefaultText>{props.children}</DefaultText>
            </View>
        )
    }

    return (
        <ScrollView>
            <Image source={{ uri: selectedRecepie.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedRecepie.duration}m</DefaultText>
                <DefaultText>{selectedRecepie.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedRecepie.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedRecepie.ingredients.map((ingredient) => (
                <RecepieItem key={ingredient} >{ingredient}</RecepieItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedRecepie.steps.map((step) => (
                <RecepieItem key={step} >{step}</RecepieItem>
            ))}
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: "center"
    },
    recepieItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default RecepieDetailScreen;