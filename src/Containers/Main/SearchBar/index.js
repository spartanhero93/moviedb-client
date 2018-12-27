import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchAPI } from '../../../redux/actions'
import styled from 'styled-components'

const Wrapper = styled.div`
  input {
    width: 15rem;
    border-radius: 3rem;
    font-size: 1rem;
    padding: 0.2rem 0.5rem;

    @media (max-width: 900px) {
      width: 5rem;
      font-size: 0.5rem;
      padding: 0;
    }
  }
`

const SearchBar = withRouter(({ history, search }) => {
  return (
    <Wrapper>
      <input
        type="text"
        name="input"
        placeholder="Search..."
        onChange={(event) => {
          search(event.target.value)
          history.push('/search')
        }}
      />
    </Wrapper>
  )
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchAPI(query)),
})

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
