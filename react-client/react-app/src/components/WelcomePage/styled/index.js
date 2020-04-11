import styled from 'styled-components'
import { default as BootstapButton } from 'react-bootstrap/Button'

export const PhoneWithSignal = styled.img`
  position: fixed;
  bottom: -5%;
  right: -2%;
  max-height: 35%;
  max-width: 21%;
  transform: rotateY(180deg)
`


export const LogoOnScreen = styled.img`
  //max-height: 600px; 
//  margin: 50px 0;
  //max-width: 40%;
`

export const Container = styled.div`
  text-align: center;
`

export const Heading = styled.h1`
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 80px  
`

export const Button = styled(BootstapButton)`
  margin: 10px;
`