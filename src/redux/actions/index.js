import {
  fetchMoviesFromDatabase,
  fetchTVFromDatabase,
  querySearch
} from '../../API'

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

/** handle query NEEDS MORE LOGIC */
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

/** Regular action */

export const getData = (data) => ({
  type: 'FETCH_DATA',
  data
})

export const getResultsFromQuerySearch = (data, query) => ({
  type: 'FETCH_QUERY_RESULTS',
  data,
  query
})
