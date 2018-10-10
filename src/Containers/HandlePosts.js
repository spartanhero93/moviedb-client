import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import DOMAIN from '../config'
import Posts from '../components/Posts'

class HandlePosts extends Component {
  state = {
    name: '',
    link: '',
    posts: []
  }

  componentDidMount () {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const response = await axios.get(`${DOMAIN}/posts`)
      this.setState({ posts: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  deletePost = async id => {
    const response = await axios.delete(`${DOMAIN}/posts/${id}`)

    if (response.error) return alert('Error')
    else {
      const posts = [...this.state.posts].filter(
        item => item._id !== response.data
      )
      this.setState({ posts })
    }
  }

  handleInputs = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = async event => {
    event.preventDefault()
    const { name, link, posts } = this.state

    try {
      const response = await axios.post(`${DOMAIN}/posts`, { name, link })
      if (response.data.error) console.log(response.data.error)
      else {
        const { newPost } = response.data
        this.setState({ posts: [...posts, newPost], name: '', link: '' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { name, link } = this.state
    return (
      <Wrapper>
        <form onSubmit={this.handleFormSubmit}>
          <h4>Post a new item</h4>
          <input
            onChange={this.handleInputs}
            value={name}
            type='text'
            name='name'
          />
          <input
            onChange={this.handleInputs}
            value={link}
            type='text'
            name='link'
          />
          <input onClick={this.handleFormSubmit} type='submit' />
        </form>
        <Posts posts={this.state.posts} deletePost={this.deletePost} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  form {
    text-align: center;
  }
`

export default HandlePosts
