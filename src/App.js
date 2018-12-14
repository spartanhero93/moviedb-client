import React from 'react'

/**redux */
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
/** components */
import SideBar from './Containers/SideBar'
const ConnectedApp = () => {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

const App = connect(mapStateToProps)(ConnectedApp)

export default App
