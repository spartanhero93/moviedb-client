import React from 'react'
import { connect } from 'react-redux'
import { SearchResultsMapper } from '../../../helpers/PersonMapper'

const SearchBarContent = ({ state }) => {
  console.log(state)

  return <div>TESTING</div>
}

const mapStateToProps = (state) => ({ state })

const ConnectedSearchBarContent = connect(mapStateToProps)(SearchBarContent)

export default ConnectedSearchBarContent
