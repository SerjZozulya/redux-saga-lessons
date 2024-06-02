import { select, take, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { GET_USERS } from "../constants";
import { getUsers } from "../../api";

export function* workerSaga() {
    const data = yield getUsers()
    console.log(data)
}

export function* watchClickSaga() {
  yield takeEvery(GET_USERS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
