const fetchPlantReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLANT_DETAILS':
            return action.payload[0];
        default:
            return state
    }
}

export default fetchPlantReducer;