import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import RecepiesNavigator from './navigation/RecepiesNavigator';
import recepiesReducer from './store/reducers/recepies';
import { initDB } from './database/db'

initDB()
    .then(() => {
        console.log('Initialize database successfully')
    })
    .catch(err => {
        console.log('Initialization of database failed')
        console.log(err)
    })

enableScreens();

const rootReducer = combineReducers({
    recepies: recepiesReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }

    return (
        <Provider store={store}>
            <RecepiesNavigator />
        </Provider>
    );
}