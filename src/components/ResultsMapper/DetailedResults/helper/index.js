import React from 'react'
import {
  Container,
  ItemOverview,
  TVDetailsContainer,
  TVNetworks,
  MovieDetailsContainer,
  PersonDetailsContainer,
} from '../styles'
import { getImageUrl } from '../../../../helpers'

export const CheckMediaTypeHelper = item => {
  if (item.first_air_date) {
    return (
      <TVDetailsContainer>
        <Container>
          <ItemOverview>{item.overview}</ItemOverview>
        </Container>
        <Container>
          <div>
            <div>Released: {item.first_air_date}</div>
            <div>Seasons: {item.number_of_seasons}</div>
            Number of episodes: {item.number_of_episodes}
            <br />
            {item.next_episode_to_air ? (
              <div>Next episode air date: {item.next_episode_to_air.air_date}</div>
            ) : (
              <div>Last aired episode: {item.last_air_date}</div>
            )}
          </div>
          <div>
            <h4>Homepage: {item.homepage}</h4>
            <div>
              {item.networks.map(network => (
                <TVNetworks key={network.id}>
                  <img alt={network.name} src={getImageUrl(network)} />
                  <div>{network.name}</div>
                </TVNetworks>
              ))}
            </div>
          </div>
        </Container>
        <div>Rating: {item.vote_average}</div>
      </TVDetailsContainer>
    )
  } else if (item.release_date) {
    return (
      <MovieDetailsContainer>
        <Container>
          <ItemOverview>{item.overview}</ItemOverview>
        </Container>
        <div>Released: {item.release_date}</div>
        <div>
          Budget: {item.budget}
          <br />
          Revenue: {item.revenue}
        </div>
        <div>Tagline: {item.tagline}</div>
        <div>Rating: {item.vote_average}</div>
      </MovieDetailsContainer>
    )
  } else {
    return (
      <PersonDetailsContainer>
        <div>Biography: {item.biography}</div>
        <div>Birthday: {item.birthday}</div>
        <div>Died: {item.deathday ? item.deathday : 'Not Yet!'}</div>
        <div>Place of birth: {item.place_of_birth}</div>
        <div>Popularity: {item.popularity}</div>
      </PersonDetailsContainer>
    )
  }
}
