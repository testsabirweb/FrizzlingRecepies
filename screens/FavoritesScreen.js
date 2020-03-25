import React from 'react';
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton'
import RecepieList from '../components/RecepieList'
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {
    const favRecepies = useSelector((state) => {
        return state.recepies.favoriteRecepies
    })

    if (favRecepies.length === 0 || !favRecepies) {
        return (
            <View style={styles.noFav}>
                <DefaultText>No favorites found!!! start adding some</DefaultText>
            </View>
        )
    }

    return (
        <RecepieList listData={favRecepies} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites',
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
    noFav: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FavoritesScreen;