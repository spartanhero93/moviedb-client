import {
  fetchMoviesFromDatabase,
  fetchTVFromDatabase,
  querySearch,
  fetchDetailedResultsFromDatabase,
  fetchToken,
  createSession,
} from '../../API/server'
import { newGuestSession } from '../../API/MovieDB'

/** Thunk */
export const fetchMovies = (
  urlName,
  pageNum = 1,
  total_pages
) => async dispatch => {
  try {
    if (pageNum < 1 || pageNum > total_pages) return
    const data = await fetchMoviesFromDatabase(urlName, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchTVShows = (
  urlName,
  pageNum = 1,
  total_pages
) => async dispatch => {
  try {
    if (pageNum < 1 || pageNum > total_pages) return
    const data = await fetchTVFromDatabase(urlName, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchDetails = (mediaTypeUsed, id) => async dispatch => {
  try {
    const { data, mediaType } = await fetchDetailedResultsFromDatabase(
      mediaTypeUsed,
      id
    )
    dispatch(getDetailedData(data, mediaType))
  } catch (error) {
    console.error(error)
  }
}

export const searchAPI = (
  query,
  pageNum = 1,
  total_pages
) => async dispatch => {
  try {
    if (pageNum < 1 || pageNum > total_pages) return
    if (!query) return
    const data = await querySearch(query, pageNum)
    dispatch(getResultsFromQuerySearch(data, query))
  } catch (error) {
    console.error(error)
  }
}

/** Account thunks */
export const createGuestSession = () => async dispatch => {
  try {
    const data = await newGuestSession()
    dispatch(createNewGuestSession(data))
  } catch (error) {}
}
export const requestToken = () => async dispatch => {
  try {
    const { data } = await fetchToken()
    return await data.request_token
  } catch (error) {
    console.error(error)
  }
}
export const createSessionWithToken = token => async dispatch => {
  try {
    const data = await createSession(token)
    if (data.success) {
      dispatch(signInWithTMDBAccount(data))
      window.localStorage.removeItem('token')
      window.localStorage.setItem('session', data.session_id)
    }
  } catch (error) {
    console.error(error)
  }
}

/** Regular action */

export const getData = data => ({
  type: 'FETCH_DATA',
  data,
})

export const getDetailedData = (data, mediaType) => ({
  type: 'FETCH_DETAILS',
  data,
  mediaType,
})

export const getResultsFromQuerySearch = (data, query) => ({
  type: 'FETCH_QUERY_RESULTS',
  data,
  query,
})

/** Account Reducer actions */
export const createNewGuestSession = data => ({
  type: 'CREATE_NEW_GUEST_SESSION',
  data,
})

export const signInWithTMDBAccount = data => ({
  type: 'SIGN_IN_TMDB_ACCOUNT',
  data,
})

export const fetchUserAccount = data => ({
  type: 'FETCH_USER_ACCOUNT',
  data,
})
