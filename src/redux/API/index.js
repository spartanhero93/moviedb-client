import axios from 'axios'

export const fetchDB = async (name, pageNum = 1) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/movies/${name}/${pageNum}`)
    const { data } = await response.data
    return await data
  } catch (error) {
    console.error(error)
  }
}
