import axios from 'axios'

export const fetchMoviesFromDatabase = async (name, pageNum) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/movies/${name}/${pageNum}`
    )
    const { data } = await response.data
    return await data
  } catch (error) {
    console.error(error)
  }
}

export const fetchTVFromDatabase = async (name, pageNum) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/tv/${name}/${pageNum}`
    )
    const { data } = await response.data
    return await data
  } catch (error) {
    console.error(error)
  }
}
