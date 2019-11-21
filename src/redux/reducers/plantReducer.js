const plantReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANTS':
            return action.payload;
        default:
            return state;
    }
}
console.log('plant reducer', plantReducer);

export default plantReducer;