import Foto from '../assets/logo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="nav">
            <img src={Foto} className="nav__logo"></img>
            <ul className="nav__ul">
                <li className='nav__li'><a href='#'>Home</a></li>
                <li className='nav__li'><a href='#'>Productos</a></li>
                <li className='nav__li'><a href='https://www.linkedin.com/in/juampi-soro/'>Contacto</a></li>
                <li>
                    <CartWidget />
                </li>
            </ul>

        </nav>
    )
}

export default NavBar