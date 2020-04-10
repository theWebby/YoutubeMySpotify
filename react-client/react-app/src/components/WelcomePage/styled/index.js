import styled from 'styled-components'
import { default as BootstapButton} from 'react-bootstrap/Button'

export const PhoneWithSignal = styled.img`
  position: fixed;
  bottom: -5%;
  left: -5%;
  max-height: 50%;
  max-width: 30%;
`


export const LogoOnScreen = styled.img`
  max-height: 400px; 
  margin: 25px 0;
  max-width: 40%;  
`

export const Container = styled.div`
  text-align: center;
`

export const Heading = styled.h1`
  margin-top: 2%;
`

export const Text = styled.p`
  margin: 15px;
`

export const Button = styled(BootstapButton)`
  margin: 5px;
`