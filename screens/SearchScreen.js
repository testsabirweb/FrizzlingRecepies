import React, { useState } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
} from 'react-native'
import { useSelector } from 'react-redux'

import SearchBar from '../components/SearchBar'
import RecepieList from '../components/RecepieList'

const SearchScreen = (props) => {
    const [searchedWord, setSearchedWord] = useState('')
    const [displayedRecepies, setDisplayedRecepies] = useState([])

    const availableRecepies = useSelector((state) => {
        return state.recepies.recepies
    })

    const onSearchHandler = (text) => {
        setSearchedWord(text)

        setDisplayedRecepies(
            availableRecepies.filter((recepie) => {
                return recepie.title.toLowerCase().includes(text.toLowerCase())
            })
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar
                searchedWord={searchedWord}
                onSearchHandler={onSearchHandler}
            />
            <View style={styles.listContainer}>
                <RecepieList
                    listData={displayedRecepies}
                    navigation={props.navigation}
                />
            </View>
        </SafeAreaView>
    )
}

SearchScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

export default SearchScreen