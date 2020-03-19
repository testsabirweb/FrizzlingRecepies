import React from 'react';
import RecepieList from '../components/RecepieList'
import { RECEPIES } from '../data/dummy-data'

const FavoritesScreen = props => {
    const favRecepies = RECEPIES.filter(recepie => recepie.id === 'r1' || recepie.id === 'r8')
    return (
        <RecepieList listData={favRecepies} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorites'
}


export default FavoritesScreen;