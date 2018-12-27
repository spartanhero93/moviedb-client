import axios from 'axios'
import { URL } from '../serverURL'

export const fetchMoviesFromDatabase = async (name, pageNum) => {
  try {
    const response = await axios.get(`${URL}/api/movies/${name}/${pageNum}`)
    const { data } = await response.data
    return await data
  } catch (error) {
    console.error(error)
  }
}

export const fetchTVFromDatabase = async (name, pageNum) => {
  try {
    const response = await axios.get(`${URL}/api/tv/${name}/${pageNum}`)
    const { data } = await response.data
    return await data
  } catch (error) {
    console.error(error)
  }
}

export const querySearch = async (query, pageNum) => {
  try {
    const response = await axios.get(`${URL}/api/search/${query}/${pageNum}`)
    const { data } = await response.data
    return await data
  } catch (error) {
    console.error(error)
  }
}
