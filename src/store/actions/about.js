export const GET_ABOUT_REQUEST = "GET_ABOUT_REQUEST";
export const GET_ABOUT_SUCCESS = "GET_ABOUT_SUCCESS";
export const GET_ABOUT_FAIL = "GET_ABOUT_FAIL";

export function getAbout() {
  return{
    type: GET_ABOUT_REQUEST,
    payload: {}
  }
}
