import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useCartContext } from "../../context/CartContext";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CarWidget from "../Cart/CarWidget";
import { Link } from "react-router-dom";
import "../Css/main.css";

function NavBar() {
  const { cartData } = useCartContext();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="logo">AG's Fragances</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/`}>
                Todos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/35sFtcqIByuClg1Tbiwl`}>
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/qTN4er3wxSkahKOE9xBn`}>
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/eiyYkbtef9NLKciEFMCG`}>
                Unisex
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
        {cartData.length > 0 ? <CarWidget /> : <p></p>}
      </Container>
    </Navbar>
  );
}

export default NavBar;
