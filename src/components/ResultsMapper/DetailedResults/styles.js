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
`
const template = () => (
  <div>
    <div className="display flex">
      <div>Image of item</div>
      <div>
        <h1>Name of item</h1>
      </div>
    </div>
  </div>
)
