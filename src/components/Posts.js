import React from 'react'
import styled from 'styled-components'

const Posts = props => {
  const { posts, deletePost } = props

  if (!posts) return <h1>Loading</h1>
  else {
    return (
      <Wrapper>
        {posts.map(item => (
          <PostWrapper key={item._id}>
            <img src={item.link} alt={item.name} />
            <div>
              {item.name} <span onClick={() => deletePost(item._id)}>X</span>
            </div>
          </PostWrapper>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 6rem;
`

const PostWrapper = styled.div`
  height: 15rem;
  border: 3px solid;
  text-align: center;
  margin: 0 1rem 1rem;
  img {
    height: 90%;
  }
  span {
    color: red
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
export default Posts
