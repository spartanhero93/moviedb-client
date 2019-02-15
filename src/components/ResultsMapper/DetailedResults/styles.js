import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  display: flex;
  flex-direction: column;
`

export const TVDetailsContainer = styled.div``
export const TVNetworks = styled.div`
  > img {
    height: 3rem;
  }
`
export const MovieDetailsContainer = styled.div``
export const PersonDetailsContainer = styled.div``

export const Container = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const TitleYearContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background: top center url(${props => props.backdrop});
  height: 30rem;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(25, 25, 25, 0.7);
  justify-content: center;

  @media (max-width: 900px) {
    height: 25rem;
  }
`
export const ItemTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.2rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`
export const ItemOverview = styled.p`
  font-size: 1.4rem;
`
export const Person = styled.div``
