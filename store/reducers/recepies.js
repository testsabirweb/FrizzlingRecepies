import { RECEPIES } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/recepies';

const initialState = {
    recepies: RECEPIES,
    filteredRecepies: RECEPIES,
    favoriteRecepies: []
}

const recepiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteRecepies.findIndex(recepie => recepie.id === action.recepieId)
            if (existingIndex >= 0) {
                const updatedFavRecepies = [...state.favoriteRecepies]
                updatedFavRecepies.splice(existingIndex, 1)
                return { ...state, favoriteRecepies: updatedFavRecepies }
            }
            else {
                const recepie = state.recepies.find(recepie => recepie.id === action.recepieId)
                return { ...state, favoriteRecepies: state.favoriteRecepies.concat(recepie) }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredRecepies = state.recepies.filter((recepie) => {
                if (appliedFilters.sugarFree && !recepie.isSugarFree) {
                    return false
                }
                if (appliedFilters.vegetarian && !recepie.isVegetarian) {
                    return false
                }
                return true
            })
            return ({ ...state, filteredRecepies: updatedFilteredRecepies })
        default:
            return state
    }
}

export default recepiesReducer 