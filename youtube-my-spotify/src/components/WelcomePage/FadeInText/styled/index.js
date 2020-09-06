import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
      opacity: 0;      
  }

  to {
      opacity: 1;
  }
`

export const Text = styled.p`
  margin: 20px;
  font-size: 30px;
  opacity: 0;

  animation: ${fadeIn} 1s linear;
   animation-delay: ${props => props.delay === 0 ? '0ms' : props.delay.toString() + 'ms'};
//animation-delay: 10000ms;
  transition: visibility 1s linear;
  animation-fill-mode: forwards;
`