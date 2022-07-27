import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from '../CarWidget/CarWidget';
import carrito from '../Image/carrito.png';
import './NavBar.css';

function NavBar() {
  return <div>
    <Navbar bg="navbar navbar-expand-lg navbar-light bg-dark" >
      <Container className='navr'>
        <Navbar.Brand href="#home" >AG's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='navr'>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Primer categoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Segunda categoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tercera categoria</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#quienessomos">Quienes somos</Nav.Link>
            <Nav.Link href="#contactanos">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CarWidget imagen = {carrito}/>
      
      </Container>
    </Navbar>
    
  </div>;
}

export default NavBar;
