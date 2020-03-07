import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecepiesScreen from '../screens/CategoryRecepiesScreen';
import RecepieDetailScreen from '../screens/RecepieDetailScreen';

import Colors from '../constants/Colors';

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
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A Screen'
        }
    }
);


export default createAppContainer(RecepiesNavigator);