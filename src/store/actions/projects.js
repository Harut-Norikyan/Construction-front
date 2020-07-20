export const GET_PROJECT_REQUEST = "GET_PROJECT_REQUEST";
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";
export const GET_PROJECT_FAIL = "GET_PROJECT_FAIL";

export function getProjects (activePage) {
  console.log(activePage,"88888888888888888888888888888")
  return{
    type: GET_PROJECT_REQUEST,
    payload: {activePage}
  }
}
export const GET_PROJECT_BY_ID_REQUEST = "GET_PROJECT_BY_ID_REQUEST";
export const GET_PROJECT_BY_ID_SUCCESS = "GET_PROJECT_BY_ID_SUCCESS";
export const GET_PROJECT_BY_ID_FAIL = "GET_PROJECT_BY_ID_FAIL";

export function getProjectById (id) {
  return{
    type: GET_PROJECT_BY_ID_REQUEST,
    payload: {id}
  }
}
