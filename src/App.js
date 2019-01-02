import React from 'react'

/**redux */
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
/** components */
import Main from './Containers/Main'
const ConnectedApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

const App = connect(mapStateToProps)(ConnectedApp)

export default App
