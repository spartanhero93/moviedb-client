import { fetchDB } from '../API'

/** Thunk */
export const fetchData = urlName => async dispatch => {
  try {
    const data = await fetchDB(urlName)
    dispatch(getData(data))
  } catch (error) {
    console.log(error)
  }
}

/** Regular action */

export const getData = data => ({
  type: 'FETCH_DATA',
  data,
})
