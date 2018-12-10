import React, { Component } from 'react'
import styled from 'styled-components'

export default class Content extends Component {
  render() {
    const { results, page } = this.props
    console.log(results)
    if (!results) return <div>Loading...</div>
    return (
      <Wrapper>
        <h1>Current page: {page}</h1>
        {results.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
          </div>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background: #5a757b;
  color: white;
  height: 100%;
`
