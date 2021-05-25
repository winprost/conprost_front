import {Navbar, Nav, NavDropdown, Form, FormControl, Button,Card, Accordion, Dropdown,DropdownButton} from 'react-bootstrap';
import React from 'react'
import logo from '../images/logo.png';
import styled from 'styled-components';

let navbar = styled.div`
    margin-left:30px;
    padding-left : 30px;
    justify-content:inherit;
`;

let search = styled.div`
    border:none;


`;

let menu = styled.div`
    margin-left : 100px;
`;

const Header = () => {

return (
    
<div className="container">
    <div className="row">
        <div className="col-12">
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">회원가입</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">문제신고</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">알림</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <navbar>
                <Navbar bg="white" variant="light">

                <DropdownButton id="dropdown-basic-button" title="Dr">
                    <Dropdown.Item href="#/action-1">Contents
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Users</Dropdown.Item>
                </DropdownButton>

                <Navbar.Brand href="#home" className="logo">
                    <img src={logo} alt="logo" width="150px"/> 
                </Navbar.Brand>
                <search>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </search>
                
                <menu>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Link href="#home">Team</Nav.Link>
                        <Nav.Link href="#features">Mypage</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                </menu>
                </Navbar> 


            </navbar>

        </div> 
    </div>
</div>
)
}
export default Header
