import React, { Component } from 'react'
import styled from 'styled-components'

export default class Content extends Component {
  render() {
    console.log(this.props)
    const { results, page } = this.props
    if (!results) return <Wrapper>Loading...</Wrapper>
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
  color: white;
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;
`
