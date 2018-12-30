import React, { Component } from 'react'
import { genreList } from '../../helpers/genresList'
class DiscoverMovies extends Component {
  state = {
    userData: {},
  }

  render() {
    return (
      <div>
        <div>
          {genreList.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default DiscoverMovies
