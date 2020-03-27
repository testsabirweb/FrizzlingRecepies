import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

import { CATEGORIES } from '../data/dummy-data';
import RecepieList from '../components/RecepieList'
import DefaultText from '../components/DefaultText';

const CategoryRecepiesScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableRecepies = useSelector((state) => {
        return state.recepies.filteredRecepies
    })

    const displayedRecepies = availableRecepies.filter(
        recepie => recepie.categoryIds.indexOf(catId) >= 0
    );

    if (displayedRecepies.length === 0) {
        return (
            <View style={styles.noRecepieFound}>
                <DefaultText>No Recepies found!!! maybe check the filters</DefaultText>
            </View>
        )
    }
    return (
        <RecepieList listData={displayedRecepies} navigation={props.navigation} />
    );
};

CategoryRecepiesScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title='filters' iconName='ios-switch' onPress={() => {
                navigationData.navigation.navigate('Filters')
            }} />
        </HeaderButtons>
    };
};
const styles = StyleSheet.create({
    noRecepieFound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryRecepiesScreen;