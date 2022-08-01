import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CarWidget from "../CarWidget/CarWidget";
import carrito from "../Image/carrito.png";

function NavBar() {
  return (
    <div classname="navar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            AG's Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Primer categoria
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Segunda categoria
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Tercera categoria
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#quienessomos">Quienes somos</Nav.Link>
              <Nav.Link href="#contactanos">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CarWidget imagen={carrito} />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
