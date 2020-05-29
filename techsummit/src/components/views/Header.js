import React, {Component, Fragment} from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';


class Header extends Component {
    render() {
        return(
            <Fragment>
                <Navbar fixed="top" bg="light" expand="md" className="navbar" >
                    <NavbarBrand className='logo' href='/'>ESummit</NavbarBrand>
                    <Navbar.Toggle  />
                    <Navbar.Collapse>
                        <Nav>
                            <NavLink href="/Home">Home</NavLink>
                            <NavLink href="/conference">Conference</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/sessions">Sessions</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}


export default Header;