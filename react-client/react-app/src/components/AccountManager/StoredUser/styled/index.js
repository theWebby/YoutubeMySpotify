import styled from 'styled-components'
import Image from "react-bootstrap/Image";

export const StoredUserContainer = styled.div`
    border: 2px solid #888; 
    max-width: 350px;
    overflow: auto;
    text-align: left;
    margin: auto;
    border-radius: 5px;

    &:hover {
        box-shadow: 2px 2px #555;
    }
`

export const ProfilePicture = styled(Image)`
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 15px;
    float: left;
`

export const Name = styled.p`
    display: inline-block;
    margin: 23px 0px;

`

export const DeleteAccount = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    float: right;

    &:hover {
        color: red; // <Thing> when hovered
    }
`
