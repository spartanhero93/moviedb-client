import React from 'react'
import styled from 'styled-components'

/**redux */
import { connect } from 'react-redux'

/** components */
// import MovieMapper from './components/movieMapper'
import Sidebar from './Containers/Sidebar/Sidebar'
import Navbar from './Containers/Navbar/Navbar'
import Content from './Containers/Content/Content'
const ConnectedApp = ({ state }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Navbar />
        <Content {...state} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`display: flex;`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const mapStateToProps = (state) => ({
  state
})

const App = connect(mapStateToProps)(ConnectedApp)

export default App
