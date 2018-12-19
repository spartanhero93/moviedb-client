import React from 'react'
import { connect } from 'react-redux'
import { SearchResultsMapper } from '../../../helpers/SearchResultsMapper'

const SearchBarContent = ({ state }) => <SearchResultsMapper {...state} />

const mapStateToProps = (state) => ({ state })

const ConnectedSearchBarContent = connect(mapStateToProps)(SearchBarContent)

export default ConnectedSearchBarContent
