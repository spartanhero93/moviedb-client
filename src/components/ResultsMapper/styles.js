import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  /* overflow-x: scroll; */
  @media (max-width: 900px) {
    padding: 0;
  }
`

export const StyledToolTip = styled.div`
  text-align: left;
  padding: 0.2rem 0.8rem;
  line-height: 1rem;
`

export const ToolTipTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  margin-right: 0.6rem;
  max-width: 15ch;
  text-overflow: ellipsis;
`

export const ToolTipReleaseDate = styled.span``

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem 0.4rem;
  height: 24rem;
  width: 14rem;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  line-height: 1.2rem;

  @media (max-width: 1600px) {
    font-size: 1.1rem;
    height: 18rem;
    width: 10rem;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;
    height: 13rem;
    width: 7rem;
    margin: 1rem 0.8rem;
  }
`
export const CardImg = styled.img`
  height: 90%;
  transition: box-shadow 0.5s ease-in-out;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`
export const CardTitle = styled.span`
  font-weight: 400;
`
export const CardGenre = styled.div`
  display: flex;
  font-size: 0.8rem;
`

export const CardRating = styled.span`
  text-align: center;
  height: 2rem;
  width: 2rem;
  background: white;
  display: block;
  position: relative;
  bottom: 80%;
  left: 92%;
  z-index: 2;
  line-height: 2rem;
  border-radius: 5rem;
  background: #20232a;
  color: white;
`
