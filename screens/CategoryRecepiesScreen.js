import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, RECEPIES } from '../data/dummy-data';
import RecepieItem from '../components/RecepieItem';

const CategoryRecepiesScreen = props => {
    const renderRecepieItem = itemData => {
        return (
            <RecepieItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectRecepie={() => {
                    props.navigation.navigate({
                        routeName: 'RecepieDetail',
                        params: {
                            recepieId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedRecepies = RECEPIES.filter(
        recepie => recepie.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedRecepies}
                keyExtractor={(item, index) => item.id}
                renderItem={renderRecepieItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

CategoryRecepiesScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default CategoryRecepiesScreen;