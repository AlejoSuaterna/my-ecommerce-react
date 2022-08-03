import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <div classname="navar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./Img/pinguin.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
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
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/5087/5087847.png"
            width="45"
            height="45"
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
