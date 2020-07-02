import {takeLatest, put, call} from 'redux-saga/effects';
import Api from "../../Api"
import {
  GET_ABOUT_REQUEST,
  GET_ABOUT_SUCCESS,
  GET_ABOUT_FAIL,
} from "../actions/about"


export default function* watcher() {
  yield takeLatest(GET_ABOUT_REQUEST, handleGetAbout)
}

function* handleGetAbout() {
  try {
    const about = yield call(Api.getAbout)
    yield put({
      type: GET_ABOUT_SUCCESS,
      payload: about
    })
  } catch (e) {
    yield put({
      type: GET_ABOUT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}
