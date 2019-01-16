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

export const fetchDetailedResultsFromDatabase = async (mediaType, id) => {
  try {
    const type = mediaType ? mediaType : 'person'
    const { data } = await axios.get(`${URL}/api/detailed/${type}/${id}`)
    const { data: media } = await data
    return await media
  } catch (error) {
    console.error(error)
  }
}

export const fetchToken = async () => {
  try {
    const { data } = await axios.get(`${URL}/auth/get_token`)
    return await data
  } catch (error) {
    console.error(error)
  }
}
export const createSession = async token => {
  try {
    const { data } = await axios.get(`${URL}/auth/create_session/:${token}`)
    return await data
  } catch (error) {
    console.error(error)
  }
}
