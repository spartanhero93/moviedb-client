import React from 'react'
import styled from 'styled-components'

/**redux */
import { connect } from 'react-redux'

/** components */
// import MovieMapper from './components/movieMapper'
import Sidebar from './Containers/Sidebar/Sidebar'
import Navbar from './Containers/Navbar/Navbar'
const ConnectedApp = ({ state }) => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const mapStateToProps = (state) => ({
  state
})

const App = connect(mapStateToProps)(ConnectedApp)

export default App
