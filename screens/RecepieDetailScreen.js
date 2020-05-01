import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'//it is different form 'HeaderButton' which is used in HeaderButton.js
import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../components/DefaultText'
import HeaderButton from '../components/HeaderButton'
import { toggleFavorite } from '../store/actions/recepies';
import Colors from '../constants/Colors';

const RecepieDetailScreen = props => {
    const availableRecepies = useSelector((state) => {
        return state.recepies.recepies
    })
    const recepieId = props.navigation.getParam('recepieId');

    const isCurrentRecepieFavorite = useSelector((state) => {
        return state.recepies.favoriteRecepies.some((recepie) => recepie.id === recepieId)
    })
    const selectedRecepie = availableRecepies.find(recepie => recepie.id === recepieId);

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(recepieId))
    }, [dispatch, recepieId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFav: isCurrentRecepieFavorite })
    }, [isCurrentRecepieFavorite])

    const RecepieItem = (props) => {
        return (
            <View style={styles.recepieItem}>
                <View><Text style={styles.index}>{props.index}</Text></View>
                <View><Text>{props.item}</Text></View>
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
                <RecepieItem
                    key={ingredient}
                    item={ingredient}
                    index={selectedRecepie.ingredients.indexOf(ingredient)+1}
                />
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedRecepie.steps.map((step) => (
                <RecepieItem
                    key={step}
                    item={step}
                    index={selectedRecepie.steps.indexOf(step)+1}
                />
            ))}
        </ScrollView>
    );
};

RecepieDetailScreen.navigationOptions = navigationData => {
    const recepieTitle = navigationData.navigation.getParam('recepieTitle')
    //const selectedRecepie = RECEPIES.find(recepie => recepie.id === recepieId);
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isFavorite = navigationData.navigation.getParam('isFav')
    return {
        headerTitle: recepieTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
                title="Favorite"
                iconName={isFavorite ? 'ios-heart' : 'ios-heart-empty'}
                color={isFavorite ? '#ff3333' : 'white'}
                onPress={toggleFavorite} />
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
        justifyContent: "space-around",
        backgroundColor: '#e6ecff',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'left',
        backgroundColor: Colors.secondaryColor,
        borderRadius: 10,
        elevation: 5,
        margin: 20,
        padding: 5,
        paddingLeft: 15
    },
    recepieItem: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        paddingRight:20,
        fontFamily: 'open-sans'
    },
    index: {
        paddingRight: 10,
        fontFamily:'open-sans-bold'
    }
});

export default RecepieDetailScreen;