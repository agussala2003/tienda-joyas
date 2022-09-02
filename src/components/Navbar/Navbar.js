import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget.js';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavScrollExample() {
  return (
    <NavBarContainer>
    <Navbar text="dark" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:'bold'}}>AcceShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link className='nav-links' href="#"><Link style={{color: '#000',textDecoration:'none'}} to='/'>Tienda</Link></Nav.Link>
            <Nav.Link className='nav-links' href="#"><Link style={{color: '#000',textDecoration:'none'}} to='/Oro'>Productos de oro</Link></Nav.Link>
            <Nav.Link className='nav-links' href="#"><Link style={{color: '#000',textDecoration:'none'}} to='/Plata'>Productos de plata</Link></Nav.Link>
          </Nav>
          <div style={{cursor:'pointer',fontSize:'25px'}}> 
            <CartWidget/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </NavBarContainer>
  );
}

export default NavScrollExample;

const NavBarContainer = styled.div`
`