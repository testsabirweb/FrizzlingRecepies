import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native'
import Colors from '../constants/Colors';


const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.anotherContainer}>
                <TextInput
                    style={styles.Text}
                    placeholder='Search'
                    value={props.searchedWord}
                    onChangeText={props.onSearchHandler}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    anotherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 1,
        backgroundColor: 'rgba(100,100,100,0.4)',
        borderRadius: 5,
        width: '80%',
        padding: 2
    },
    Text: {
        fontFamily: 'open-sans',
        fontSize: 16,
        flex: 1,
        paddingLeft: 4,
        color: 'black'
    },

})

export default SearchBar