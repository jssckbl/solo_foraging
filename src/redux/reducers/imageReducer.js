const imageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANT_IMAGES':
            return action.payload;
        default:
            return state
    }
}

export default imageReducer;