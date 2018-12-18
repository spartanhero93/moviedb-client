import {
  fetchMoviesFromDatabase,
  fetchTVFromDatabase,
  querySearch
} from '../../API'

/** Thunk */
export const fetchMovies = (urlName, pageNum = 1) => async (dispatch) => {
  try {
    if (pageNum < 1) return alert('Stop')
    const data = await fetchMoviesFromDatabase(urlName, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchTVShows = (urlName, pageNum = 1) => async (dispatch) => {
  try {
    if (pageNum < 1) return alert('stop')
    const data = await fetchTVFromDatabase(urlName, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

export const searchAPI = (query, pageNum = 1) => async (dispatch) => {
  try {
    if (pageNum < 1) return alert('stop')
    const data = await querySearch(query, pageNum)
    dispatch(getData(data))
  } catch (error) {
    console.error(error)
  }
}

/** Regular action */

export const getData = (data) => ({
  type: 'FETCH_DATA',
  data
})
