import React from 'react'

const MovieMapper = props => {
  console.log(props)
  if (!props.results) return <div>Loading...</div>
  return (
    <div>
      <h1>Current page: {props.page}</h1>
      {props.results.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  )
}
export default MovieMapper
