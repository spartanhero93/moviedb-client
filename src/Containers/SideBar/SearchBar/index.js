import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchAPI } from '../../../redux/actions'
import styled from 'styled-components'

const Wrapper = styled.div``

const SearchBar = withRouter(({ history, search }) => {
  return (
    <Wrapper>
      <input
        type='text'
        name='input'
        placeholder='Search...'
        onChange={(event) => {
          search(event.target.value)
          history.push('/search')
        }}
      />
    </Wrapper>
  )
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchAPI(query))
})

export default connect(null, mapDispatchToProps)(SearchBar)
