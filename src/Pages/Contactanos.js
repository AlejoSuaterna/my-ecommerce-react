import { NavLink } from 'react-router-dom';

export default function Contactanos () {
    return (
        <div className="page">
            <h1>Aqui puede ir un formulario e info de contacto</h1>
            <div>
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/">Home</NavLink>
                {' '}
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/QuienesSomos">Quienes somos</NavLink>
            </div>

        </div>
    );
}