import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import RecepieItem from './RecepieItem'

const RecepieList = (props) => {
    const renderRecepieItem = itemData => {
        return (
            <RecepieItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectRecepie={() => {
                    props.navigation.navigate({
                        routeName: 'RecepieDetail',
                        params: {
                            recepieId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderRecepieItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default RecepieList 