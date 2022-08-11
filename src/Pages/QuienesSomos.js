import { NavLink } from 'react-router-dom';

export default function QuienesSomos () {
    return (
        <div className="page">
            <h1>Aqui va una descripción de Quienes Somos!</h1>
            <div>
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/">Home</NavLink>
                {' '}
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/Contactanos">Contactanos</NavLink>
            </div>

        </div>
    );
}