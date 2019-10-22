const editPlant = (state = [], action) => {
    if ('EDIT_PLANT' === action.type) {
        console.log(action.payload);
        return action.payload
    }
    return state;
}

export default editPlant;