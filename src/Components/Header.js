import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand >FOOD HUNT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
              <Link to="/">
                <Button variant="outline-light" size="sm" className="mx-2">
                  Home
                </Button>
              
              </Link>
             
              <Link to="/login">
                <Button variant="outline-light" size="sm" className="mx-2">
                 Login
                </Button>
              </Link> 
            </Nav>
          </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
      </>
  )
}