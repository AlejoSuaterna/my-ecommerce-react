import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function QuienesSomos() {
  return (
    <div className="page">
      <h1>Aqui va una descripción de Quienes Somos!</h1>
      <div>
        <Container className="cartGrid">
          <Row>
            <Col xs={5}>Aqui bonita imagen</Col>
            <Col xs={5}>y aqui descripción</Col>
          </Row>
        </Container>
      </div>
      <footer>
        <NavLink
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
          to="/"
        >
          Home
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) => (isActive ? "pagina-activa" : undefined)}
          to="/Contactanos"
        >
          Contactanos
        </NavLink>
      </footer>
    </div>
  );
}
