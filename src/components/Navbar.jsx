import { useState } from 'react';
import logo from '../assets/images/LogoMB.png';
import CartWidget from './CartWidget';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="navbar">
			<a href="/">
				<img
					src={logo}
					alt="Logo Monkey Beats"
					className="navbar__logo"
				/>
			</a>

			<button className="navbar__toggle" onClick={toggleMenu}>
				<i className="bi bi-list"></i>
			</button>

			<div
				className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}
			>
				<a href="/" className="navbar__link">
					Inicio
				</a>
				<a href="#" className="navbar__link">
					Productos
				</a>
				<a href="#" className="navbar__link">
					Blog
				</a>
				<a href="#" className="navbar__link">
					Contacto
				</a>
			</div>

			<div className="navbar__icons d-flex align-items-center">
				<a href="#" className="navbar__icon-link">
					<i className="bi bi-search navbar__icon"></i>
				</a>

				<a href="#" className="navbar__icon-link">
					<CartWidget />
				</a>

				<a href="#" className="navbar__icon-link">
					<i className="bi bi-person navbar__icon"></i>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
