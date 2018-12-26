import axios from 'axios'

const URL = `http://localhost:3001`

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

export const newGuestSession = async () => {
  try {
    const { data } = await axios.get(`${URL}/auth/new_guest_session`)
    return await data
  } catch (error) {
    console.error(error)
  }
}
