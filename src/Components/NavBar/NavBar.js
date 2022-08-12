import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div classname="navar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
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
                <NavDropdown.Item as={Link} to={"/"}>
                  todos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/mazda`}>
                  mazda
                </NavDropdown.Item>
                {/* <Link to={`/category/mazda`}>
                  <Button type="button" className="btn btn-outline-dark">
                    Detalle
                  </Button>
                </Link> */}
                <NavDropdown.Item as={Link}to={`/category/ford`}>
                  ford
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/QuienesSomos">
                Quienes somos
              </Nav.Link>
              <Nav.Link as={Link} to="/Contactanos">
                Contactanos
              </Nav.Link>
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
