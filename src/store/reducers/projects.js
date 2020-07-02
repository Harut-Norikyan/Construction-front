import {
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
} from "../actions/projects"

const initialstate = {
  requestStatus: '',
  projects:[],
  projectById :{}
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {

    case GET_PROJECT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_PROJECT_SUCCESS: {
      const {projects} = action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        projects:projects
      }
    }
    case GET_PROJECT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
    case GET_PROJECT_BY_ID_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_PROJECT_BY_ID_SUCCESS: {
      const {projectById} = action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        projectById:projectById,
      }
    }
    case GET_PROJECT_BY_ID_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    default: {
      return state
    }
  }

}
