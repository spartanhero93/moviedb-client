import React from 'react'
import styled from 'styled-components'

/**redux */
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
/** components */
// import MovieMapper from './components/movieMapper'
import Sidebar from './Containers/Sidebar/Sidebar'
import Navbar from './Containers/Navbar/Navbar'
const ConnectedApp = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Sidebar />
        </Wrapper>
      </BrowserRouter>
    </React.Fragment>
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
