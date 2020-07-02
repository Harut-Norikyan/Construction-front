import { all, fork } from 'redux-saga/effects';
import projects from"./projects"
import about from"./about"

export default function* watchers() {
  yield all([
    fork(projects),
    fork(about),
  ]);
}
