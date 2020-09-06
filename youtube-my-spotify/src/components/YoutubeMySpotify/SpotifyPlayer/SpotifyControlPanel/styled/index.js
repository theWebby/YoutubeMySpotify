import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const RoundedButton = styled(Button)`
    border-radius: 100px;
    line-height: 0;
    padding: 10px;
    margin: 10px;
`

export const ControlPanelContainer = styled.div`
    display: block;
    text-align: center;
    margin: 10px;
`

export const Info = styled.p`
    display: inline;
    margin: 5px;
    color: grey;
`

export const MarqueeContainer = styled.div`
    display: inline-block;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
`

