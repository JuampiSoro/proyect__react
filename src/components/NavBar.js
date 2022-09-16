import Foto from '../assets/logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <span><Link to="/"><img src={Foto} className="nav__logo" alt='Logo'></img></Link></span>
            <ul className="nav__ul">
                <li className='nav__li'><Link to="/">Home</Link></li>
                <li className='nav__li'>Productos</li>
                <li className='nav__li'><Link to="/contacto/">Contacto</Link></li>
                <li>
                    <CartWidget />
                </li>
            </ul>

        </nav>
    )
}

export default NavBar