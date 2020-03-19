import React from 'react';

import { CATEGORIES, RECEPIES } from '../data/dummy-data';
import RecepieList from '../components/RecepieList'

const CategoryRecepiesScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const displayedRecepies = RECEPIES.filter(
        recepie => recepie.categoryIds.indexOf(catId) >= 0
    );
    return (
        <RecepieList listData={displayedRecepies} navigation={props.navigation} />
    );
};

CategoryRecepiesScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryRecepiesScreen;