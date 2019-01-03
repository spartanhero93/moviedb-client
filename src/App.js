import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

/**redux */
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
/** components */
import Main from './Containers/Main'
const ConnectedApp = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <Main />
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

const App = connect(mapStateToProps)(ConnectedApp)

export default App
