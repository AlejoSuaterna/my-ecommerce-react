import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CarWidget from "../Cart/CarWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navar">
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
                <NavDropdown.Item as={Link} to={`/category/qTN4er3wxSkahKOE9xBn`}>
                  cubo rubik sencillo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/35sFtcqIByuClg1Tbiwl`}>
                  cubo rubik Mirror
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
          <CarWidget/>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
