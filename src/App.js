import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import Landing from './components/Landing'

class App extends Component {
  state = {
    data: {}
  }

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
