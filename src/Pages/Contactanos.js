import { NavLink } from 'react-router-dom';
import "../Components/Css/main.css";

export default function Contactanos () {
    return (
        <div className="page">
            <h1 className='logo2'>¡No dudes en contactarnos!</h1>
            <div>
        <img
                src="https://static.vecteezy.com/system/resources/previews/006/878/052/non_2x/glass-bottles-with-different-perfumes-on-a-white-background-free-photo.jpg"
                width="700"
                align="center"
                alt=""
              />
      </div>
            <footer>
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/">Home</NavLink>
                {' '}
                <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined } to="/QuienesSomos">Quienes somos</NavLink>
            </footer>

        </div>
    );
}