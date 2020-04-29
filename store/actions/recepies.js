import { insertFavorite, deleteFavorite, fetchFavorites } from '../../database/db'

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_FILTERS = 'SET_FILTERS'

export const toggleFavorite = (id) => {
    fetchFavorites().then((F) => {
        console.log(F.rows._array)
        let isFav = F.rows._array.find((elementId) => elementId === id)
        if (isFav !== undefined) {
            insertFavorite(id)
        } else {
            deleteFavorite(id)
        }

    }).catch((err) => {
        console.log(err)
    })
    return {
        type: TOGGLE_FAVORITE,
        recepieId: id
    }
}
export const setFilters = filterSettings => {
    return {
        type: SET_FILTERS,
        filters: filterSettings
    }
} 