import { combineReducers } from "redux"

const initialState = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
  query: ""
}

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, ...action.data }
    case "FETCH_QUERY_RESULTS":
      return {
        ...state,
        ...action.data,
        query: action.query
      }
    case "DETAILED_DATA":
      return { ...state, ...state.details, ...action.data }
    default:
      return state
  }
}

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return { ...action.data }
    default:
      return state
  }
}

const userAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_GUEST_ACCOUNT":
      return { ...action.data }
    default:
      return state
  }
}

export default combineReducers({ mediaReducer, detailsReducer })
