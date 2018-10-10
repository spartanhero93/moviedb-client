import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
/** Pages for React-Router */
import Landing from '../Pages/Landing'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
          </div>
        </BrowserRouter>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
`

export default App
