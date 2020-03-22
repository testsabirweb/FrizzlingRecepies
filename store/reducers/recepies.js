import { RECEPIES } from '../../data/dummy-data'

const initialState = {
    recepies: RECEPIES,
    filteredRecepies: RECEPIES,
    favoriteRecepies: []
}

const recepiesReducer = (state = initialState, action) => {
    return state
}

export default recepiesReducer 