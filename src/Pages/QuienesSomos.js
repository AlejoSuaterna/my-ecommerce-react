import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "../Components/Css/main.css";

export default function QuienesSomos() {
  return (
    <div className="page">
      <h1 className="logo2">AG'S Fragances</h1>
      <h1 className="logo">¡siempre a tu alcance!</h1>
      <h1>{" "}</h1>
      <div>
        <Container className="cartGrid">
          <Row>
            <Col xs={5}>
              <img
                src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/VNR33KD6S5AXBFFFUSGK45C53U.jpg"
                width="500"
                align="center"
                alt=""
              />
            </Col>
            <Col xs={5}>Somos distribuidores de perfumes</Col>
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
