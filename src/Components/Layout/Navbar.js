import  React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonDropdown
  } from 'reactstrap';
  
const Nabar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className="hd-leftum">
            <Navbar outline light expand="md" className="nav">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/Home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="">Chocolate</NavLink>
                    </NavItem>
                </Nav>

                
                </Collapse>
            </Navbar>
    </div>
    );
}


export default Nabar
