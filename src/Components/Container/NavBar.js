import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return <div>
    <Navbar bg="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Navbar.Brand href="#home">AG's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Primer categoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Segunda categoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tercera categoria</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#quienessomos">Quienes somos</Nav.Link>
            <Nav.Link href="#contactanos">Contactanos</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="buscar"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
}

export default NavBar;
