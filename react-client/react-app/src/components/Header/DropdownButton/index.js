import React from "react";
import { StyledDropdown as Dropdown } from "./styled";


/*
props: {
    variant: 'success',
    text: 'Dropdown Button',
    items: [
        href: './', --want to do on click here or something
        text: 'hello world',
    ]
}
*/
function DropdownButton (props){
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle variant={props.variant} id="dropdown-basic">
          {props.text}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.items.map((item, index) => {
            return Object.keys(item).length
              ? <Dropdown.Item href={item.href} key={index}>{item.text}</Dropdown.Item>
              : <Dropdown.Divider key={index} />
          })}
        </Dropdown.Menu>
      </Dropdown>
    );

}

export default DropdownButton;
