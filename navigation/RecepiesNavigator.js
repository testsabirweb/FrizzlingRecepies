import React from 'react'
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecepiesScreen from '../screens/CategoryRecepiesScreen';
import RecepieDetailScreen from '../screens/RecepieDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen';
import SearchScreen from '../screens/SearchScreen'
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        width: Dimensions.get('window').width * 0.66
    },
    headerBackStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}

const RecepiesNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryRecepies: {
            screen: CategoryRecepiesScreen
        },
        RecepieDetail: RecepieDetailScreen,
        Search: SearchScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOption
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        RecepieDetail: RecepieDetailScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOption
    }
)

const tabScreenConfig = {
    Recepies: {
        screen: RecepiesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,//works only when shifting :true
            tabBarLabel: Platform === 'android' ?
                <Text
                    style={{ fontFamily: 'open-sans-bold' }}
                >Recepies</Text> : 'Recepies'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star-outline' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform === 'android' ?
                <Text
                    style={{ fontFamily: 'open-sans-bold' }}
                >Favorites</Text> : 'Favorites'
        }
    }
}

const RecepiesFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans'
                },
                activeTintColor: Colors.accentColor
            }
        })

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
        defaultNavigationOptions: defaultStackNavOption
    }
)

const MainNavigator = createDrawerNavigator({
    RecepiesFav: {
        screen: RecepiesFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Recepies'
        }
    },
    Filters: FiltersNavigator
}, {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold',
                fontSize: 20
            }
        }
    }
)

export default createAppContainer(MainNavigator);