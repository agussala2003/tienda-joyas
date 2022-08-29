import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.js';
import ItemListContainer from './ItemListContainer.js';
import styled from 'styled-components';
import Main from './Main.js';

function NavScrollExample() {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
    console.log(expanded);
  }
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
            <Nav.Link style={{color: '#000'}} className='nav-links' href="#">Tienda</Nav.Link>
            <Nav.Link style={{color: '#000'}} className='nav-links' href="#">Productos de oro</Nav.Link>
            <Nav.Link style={{color: '#000'}} className='nav-links' href="#">Productos de plata</Nav.Link>
          </Nav>
          <div style={{cursor:'pointer',fontSize:'25px'}} onClick={handleClick}> 
            <CartWidget/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className={`item-list-container ${expanded ? '' : 'inactive'}`}>
      <ItemListContainer/>
    </div>
    <div className={`main-container ${expanded ? 'inactive' : ''}`}>
      <Main/>
    </div>
    </NavBarContainer>
  );
}

export default NavScrollExample;

const NavBarContainer = styled.div`
  .item-list-container{
    display: block;
  }
  .inactive{
    display: none;
  }
`