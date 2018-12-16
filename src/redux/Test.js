import React from 'react'
import { connect } from 'react-redux'
import { createStore } from 'redux'

const Test = ({ counter, inc, dec }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>
    </div>
  )
}

/** redux */
const inc = () => ({
  type: 'INC'
})
const dec = () => ({
  type: 'DEC'
})

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 }
    case 'DEC':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(inc()),
  dec: () => dispatch(dec())
})

export const store = createStore(reducer)
export const ConnectedTest = connect(mapStateToProps, mapDispatchToProps)(Test)
