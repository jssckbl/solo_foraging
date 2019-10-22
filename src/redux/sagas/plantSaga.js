import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getPlantSaga() {
    try {
        const response = yield axios.get(`/plants`);
        yield put({ type: 'SET_PLANTS', payload: response.data })
    } catch (error) {
        console.log('Error getting plant information', error);
        alert('Could not get plant information in plantSaga.')
    }
}

function* addPlantSaga(action) {
    try {
        yield axios.post(`/plants`, action.payload);
        yield put({ type: 'GET_PLANT', payload: action.payload })
    } catch (error) {
        console.log('Error', error);
        alert('Could not get plant information in addPlantSaga.')
    }
}

function* editPlantSaga(action) {
    try {
        console.log('in edit Plant Saga, action.payload is:', action.payload.editPlantSaga);
        yield axios.put(`/plants/edit`, action.payload.editPlantSaga);

    } catch (error) {
        console.log('Error', error);
        // alert('Could not update plant info')
    }
}

function* plantSaga() {
    yield takeLatest('SET_PLANTS', getPlantSaga);
    yield takeLatest('ADD_PLANT', addPlantSaga);
    yield takeLatest('EDIT_PLANT', editPlantSaga);

}


export default plantSaga;