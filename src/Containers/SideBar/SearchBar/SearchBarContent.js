import React from 'react'
import { connect } from 'react-redux'
import ResultsMapper from '../../../helpers/ResultsMapper'

const SearchBarContent = ({ state }) => <ResultsMapper {...state} />

const mapStateToProps = (state) => ({ state })

const ConnectedSearchBarContent = connect(mapStateToProps)(SearchBarContent)

export default ConnectedSearchBarContent
