import styled from 'styled-components'
import Dropdown from "react-bootstrap/Dropdown";

export const StyledDropdown = styled(Dropdown)`
    display: inline;    
    float: right;
    margin: -8px;
`

export const StyledDropDownItem = styled(Dropdown.Item)`
    color: #ccc;
    &&:hover{
        background-color: #4b545e;
        color: #ccc;
    }
`