import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import { setFilters } from '../store/actions/recepies';

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onStateChange}
            />
        </View>
    )
}

const FiltersScreen = props => {
    const dispatch = useDispatch()

    const { navigation } = props

    const [isSugarFree, setIsSugarFree] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            sugarFree: isSugarFree,
            vegetarian: isVegetarian
        }
        dispatch(setFilters(appliedFilters))
    }, [isSugarFree, isVegetarian, dispatch])

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters!!!</Text>
            <FilterSwitch
                label='Sugar-Free'
                state={isSugarFree}
                onStateChange={(newValue) => setIsSugarFree(newValue)}
            />
            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onStateChange={(newValue) => setIsVegetarian(newValue)}
            />
        </View>
    );
};


FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save'
                //iconName='ios-menu'
                onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;