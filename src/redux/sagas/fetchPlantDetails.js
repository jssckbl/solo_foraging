import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* plantDetailsRoot() {
    yield takeEvery('FETCH_PLANT_DETAILS', fetchPlantDetails)
}

function* fetchPlantDetails(action) {
    console.log('in fetch Plant Details', action.payload)

    try {
        const response = yield axios.get(`/plants/${action.payload.shows_id}`);
        yield put({ type: 'SET_PLANT_DETAILS', payload: response.data })
    } catch (error) {
        console.log('Error getting plant details', error);
        alert('Could not get plant details.')
    }
}


export default plantDetailsRoot;