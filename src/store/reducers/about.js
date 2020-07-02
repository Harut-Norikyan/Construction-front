import {
  GET_ABOUT_REQUEST,
  GET_ABOUT_SUCCESS,
  GET_ABOUT_FAIL,
} from "../actions/about"

const initialstate = {
  requestStatus: '',
  about:{},
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {

    case GET_ABOUT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_ABOUT_SUCCESS: {
      console.log(action.payload)
      const {about} = action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        about:about
      }
    }
    case GET_ABOUT_FAIL: {
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
