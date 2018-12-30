import styled, { keyframes } from "styled-components"

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
    padding: 1rem;
    width: 14rem;
  }
`
export const Container = styled.div`
  display: flex;
`
export const TitleYearContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const ItemTitle = styled.span`
  font-size: 3rem;
  font-weight: 200;
`
export const ItemYearReleased = styled.span`
  font-size: 1.5rem;
`
export const ItemOverview = styled.p`
  padding: 1rem;
`
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
