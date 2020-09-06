import React from "react";
import { StyledDropdown as Dropdown, StyledDropDownItem } from "./styled";


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    style = {{color: '#ccc'}}
    class="btn btn-link"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span class="ml-1 text-muted" style={{ fontSize: '10px' }}>
      &#x25bc;
    </span>
  </a>
));

function renderMenuItem(item, index){
  if(Object.keys(item).length){
    return <StyledDropDownItem onClick={item.onclick} key={index}>{item.isCurrentUser ? <span>&#127925;</span> : null} {item.text}</StyledDropDownItem>
  } else{
    return <Dropdown.Divider key={index} />
  }
}

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {    
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled mb-0 ">
          {children}
        </ul>
      </div>
    );
  },
);

function DropdownButton (props){
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" variant={props.variant}>
          {props.children}
        </Dropdown.Toggle>

        <Dropdown.Menu className='bg-dark'>
          {props.items.map((item, index) => { return renderMenuItem(item, index) })}
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default DropdownButton;
