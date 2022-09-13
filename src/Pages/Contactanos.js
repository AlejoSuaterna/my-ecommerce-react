import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

export default function Contactanos () {
    return (
        <div className="page">
            <h1>Aqui puede ir un formulario e info de contacto</h1>
            <div>
        <Container className="cartGrid">
          <Row>
            <Col xs={5}>Aqui bonita imagen</Col>
            <Col xs={5}>y aqui descripción</Col>
          </Row>
        </Container>
      </div>
            <footer>
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/">Home</NavLink>
                {' '}
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/QuienesSomos">Quienes somos</NavLink>
            </footer>

        </div>
    );
}