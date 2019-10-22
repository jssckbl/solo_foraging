const currentPlantReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CURRENT_PLANT_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// this does not need a saga because it is setting plant info 

export default currentPlantReducer;