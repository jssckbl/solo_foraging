import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import plantSaga from './plantSaga';
import fetchPlantDetails from './fetchPlantDetails';

export default function* rootSaga() {

  yield all ([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    plantSaga(),
    fetchPlantDetails(),
  ]);
}