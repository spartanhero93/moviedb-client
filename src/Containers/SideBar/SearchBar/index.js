import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
import { searchAPI } from '../../../redux/actions'

class SearchBar extends Component {
  render() {
    const { search } = this.props
    return (
      <div>
        <NavLink
          key={'searchBar'}
          to={'/search'}
          style={{ textDecoration: 'none' }}
        >
          <input
            type='text'
            name='input'
            placeholder='Search...'
            onChange={(event) => search(event.target.value)}
          />
        </NavLink>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchAPI(query))
})

const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)

export default ConnectedSearchBar
