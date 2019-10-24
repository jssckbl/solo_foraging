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
        yield put({ type: 'GET_PLANTS', payload: action.payload })
    } catch (error) {
        console.log('Error', error);
        alert('Could not get plant information in addPlantSaga.')
    }
}

function* getCurrentPlant(action){
    try {
        console.log(action.payload);
        
        const response = yield axios.get(`/plants/${action.payload}`);
        yield put({type: 'CURRENT_PLANT_DETAILS', payload: response.data})
    }catch (error) {
        console.log('error getting single plant', error);
    }
}

function* editPlantSaga(action) {
    try {
        console.log('in edit Plant Saga, action.payload is:', action.payload);
        yield axios.put(`/plants/edit`, action.payload);
        // below (action) is what gets the edit page to edit immediately! yay!
        this.getCurrentPlant(action);
    } catch (error) {
        console.log('Error', error);
        // alert('Could not update plant info')
    }
}

function* deletePlant(action) {
    try {
        console.log('in deletePlant SAGA', action.payload);
        yield axios.delete(`/edit/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_PLANTS'});
    } catch (error) {
        console.log('error in deletePlant saga', error);
    }
}

function* plantSaga() {
    yield takeLatest('GET_PLANTS', getPlantSaga);
    yield takeLatest('ADD_PLANT', addPlantSaga);
    yield takeLatest('EDIT_PLANT', editPlantSaga);
    yield takeLatest('GET_CURRENT_PLANT', getCurrentPlant);
    yield takeLatest('DELETE_PLANT', deletePlant);

}


export default plantSaga;