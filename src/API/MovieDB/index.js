import axios from 'axios'
import { URL } from '../serverURL'

/** Have to remove this and implement it safely */
export const get_API_KEY_FROM_SERVER = async () => {
  try {
    const { data } = await axios.get(`${URL}/auth/key`)
    const { key } = await data
    return key
  } catch (error) {
    console.error(error)
  }
}

export const newGuestSession = async () => {
  try {
    /** Fetch API key and create new session with it*/
    const key = await get_API_KEY_FROM_SERVER()
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${key}`
    )
    return await data
    // return await data
  } catch (error) {
    console.error(error)
  }
}
