import { combineReducers } from 'redux';
import projects from "./projects"
import about from "./about"

export default combineReducers({
  projects,
  about
});
