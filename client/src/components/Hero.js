import React from 'react'
import { Route } from 'react-router-dom'

const styles = {
  container: `height: 50vh;
  width: 100%;
  border: 2px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;`
}

const Hero = () => {
  return (
    <div className={styles.container}>
        <h1>Welcome to the MovieDB app</h1>
        <p>Browse all kinds of media using MDAPI</p>
    </div>
  )
}

export const HeroRoute = () => <Route exact path='/' component={Hero} />