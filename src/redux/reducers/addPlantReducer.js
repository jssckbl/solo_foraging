// consider commenting out the below code

const addPlantReducer = (state = [], action) => {
    if ('SET_PLANT' === action.type) {
        console.log(action.payload);
        return action.payload
    }
    return state;
}

export default addPlantReducer;