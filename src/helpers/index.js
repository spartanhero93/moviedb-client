import { genreList } from './genresList'
import NoImage2 from '../icons/404-notfound.png'
const imgURLPoster = 'https://image.tmdb.org/t/p/w500'
const imgURLBackdrop = 'https://image.tmdb.org/t/p/w1280'
export const getImageUrl = item => {
  if (item.poster_path) {
    return imgURLPoster + item.poster_path
  } else if (item.profile_path) {
    return imgURLPoster + item.profile_path
  } else if (item.logo_path) {
    return imgURLPoster + item.logo_path
  } else {
    return NoImage2
  }
}
export const getBackdropURL = backdrop =>
  backdrop ? imgURLBackdrop + backdrop : NoImage2

export const returnOnlyYear = date => date.split('').splice(0, 4)

export const getGenreFromId = itemGeneres => {
  let genres = []
  itemGeneres.sort((a, b) => a - b)
  genreList.map(obj =>
    itemGeneres.map(item => (obj.id === item ? genres.push(obj) : null))
  )
  if (genres.length > 3) {
    return genres.splice(0, 3)
  } else {
    return genres
  }
}

export const arrowGenerator = color => {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  }
}
