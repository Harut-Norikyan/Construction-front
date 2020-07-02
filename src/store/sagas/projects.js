import {takeLatest, put, call} from 'redux-saga/effects';
import Api from "../../Api"
import {
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
} from "../actions/projects"


export default function* watcher() {
  yield takeLatest(GET_PROJECT_REQUEST, handleGetProjects)
  yield takeLatest(GET_PROJECT_BY_ID_REQUEST, handleGetProjectById)
}

function* handleGetProjects() {
  try {
    const projects = yield call(Api.getProjects)
    yield put({
      type: GET_PROJECT_SUCCESS,
      payload: projects
    })
  } catch (e) {
    yield put({
      type: GET_PROJECT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}
function* handleGetProjectById(action) {
  try {
    const{id} = action.payload
    const projectById = yield call(Api.getProjectById,id)
    yield put({
      type: GET_PROJECT_BY_ID_SUCCESS,
      payload: projectById
    })
  } catch (e) {
    yield put({
      type: GET_PROJECT_BY_ID_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}
