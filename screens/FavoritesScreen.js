import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import RecepieList from '../components/RecepieList'
import { RECEPIES } from '../data/dummy-data'

const FavoritesScreen = props => {
    const favRecepies = RECEPIES.filter(recepie => recepie.id === 'r1' || recepie.id === 'r8')
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

export default FavoritesScreen;