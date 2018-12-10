import React from 'react'
import { connect } from 'react-redux'
import { createStore } from 'redux'

const App = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={props.test}>Click me</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  test: () => dispatch(trigger)
})

/** redux */
const trigger = {
  type: 'TEST'
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      alert('Trigger clicked')
    default:
      return state
  }
}

export const ConnectedApp = connect(null, mapDispatchToProps)(App)
export const store = createStore(reducer)
