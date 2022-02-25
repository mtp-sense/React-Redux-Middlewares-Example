import { takeLatest, put } from "redux-saga/effects";

export function* handlerSaga() {
  const data = yield fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());
  yield put({ type: "GET_USERS", payload: data });
}

export function* watcherSaga() {
  yield takeLatest("FETCH_USERS", handlerSaga);
}
