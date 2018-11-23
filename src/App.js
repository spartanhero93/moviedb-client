import React, { Component } from 'react'
import styled from 'styled-components'

/**redux */
import { connect } from 'react-redux'

/** components */
import MovieMapper from './components/movieMapper'
import Sidebar from './Containers/Sidebar/index'

const ConnectedApp = ({ state }) => {
  return (
    <Wrapper>
      <Sidebar />
      <MovieMapper {...state} />
    </Wrapper>
  )
}

const Wrapper = styled.div`display: flex;`

const mapStateToProps = state => ({
  state,
})

const App = connect(mapStateToProps)(ConnectedApp)

export default App
