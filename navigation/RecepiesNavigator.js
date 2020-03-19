import React from 'react'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecepiesScreen from '../screens/CategoryRecepiesScreen';
import RecepieDetailScreen from '../screens/RecepieDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
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
        RecepieDetail: RecepieDetailScreen
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
            tabBarColor: Colors.primaryColor//works only when shifting :true
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star-outline' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
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
                activeTintColor: Colors.accentColor
            }
        })

export default createAppContainer(RecepiesFavTabNavigator);