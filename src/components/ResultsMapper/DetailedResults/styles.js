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

  img {
    height: 22rem;
    width: 14rem;
    margin: 0 auto;
  }
`
export const Container = styled.div`
  display: flex;
  padding: 1rem 0;

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
  box-shadow: inset 0 0 0 2000px rgba(25, 25, 25, 0.6);
  line-height: 15rem;
`
export const ItemTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
`
export const ItemYearReleased = styled.span`
  font-size: 1.5rem;
`
export const ItemOverview = styled.p`
  font-size: 1.4rem;
`
export const Person = styled.div``
// const template = () => (
//   <div>
//     <div className="display flex">
//       <div>Image of item</div>
//       <div>
//         <h1>Name of item</h1>
//       </div>
//     </div>
//   </div>
// )
