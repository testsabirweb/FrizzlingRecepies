import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryRecepies',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={1}
            />
        </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Recepie Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:'white'
    }
});

export default CategoriesScreen;