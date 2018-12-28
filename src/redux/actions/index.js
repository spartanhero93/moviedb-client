import {
  fetchMoviesFromDatabase,
  fetchTVFromDatabase,
  querySearch,
  fetchDetailedResultsFromDatabase,
} from '../../API/server'
import { newGuestSession } from '../../API/MovieDB'

/** Thunk */
export const fetchMovies = (urlName, pageNum = 1, total_pages) => async (
  dispatch
) => {
  try {
    if (pageNum < 1 || pageNum > total_pages) return
    const data = await fetchMoviesFromDatabase(urlName, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchTVShows = (urlName, pageNum = 1, total_pages) => async (
  dispatch
) => {
  try {
    if (pageNum < 1 || pageNum > total_pages) return
    const data = await fetchTVFromDatabase(urlName, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchDetails = (mediaType, id) => async (dispatch) => {
  try {
    const { data } = await fetchDetailedResultsFromDatabase(mediaType, id)
    dispatch(getDetailedData(data))
  } catch (error) {}
}

export const searchAPI = (query, pageNum = 1, total_pages) => async (
  dispatch
) => {
  try {
    if (pageNum < 1 || pageNum > total_pages) return
    if (!query) return
    const data = await querySearch(query, pageNum)
    dispatch(getResultsFromQuerySearch(data, query))
  } catch (error) {
    console.error(error)
  }
}

export const createGuestSession = () => async (dispatch) => {
  try {
    const data = await newGuestSession()
    dispatch(createNewGuestSession(data))
  } catch (error) {}
}

/** Regular action */

export const getData = (data) => ({
  type: 'FETCH_DATA',
  data,
})

export const getDetailedData = (data) => ({
  type: 'FETCH_DETAILS',
  data,
})

export const getResultsFromQuerySearch = (data, query) => ({
  type: 'FETCH_QUERY_RESULTS',
  data,
  query,
})

export const createNewGuestSession = (data) => ({
  type: 'CREATE_NEW_GUEST_SESSION',
  data,
})

export const fetchUserAccount = (data) => ({
  type: 'FETCH_USER_ACCOUNT',
  data,
})
