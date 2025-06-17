import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/LogoMB.png';
import CartWidget from './CartWidget';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="navbar">
			<Link href="/">
				<img
					src={logo}
					alt="Logo Monkey Beats"
					className="navbar__logo"
				/>
			</Link>

			<button className="navbar__toggle" onClick={toggleMenu}>
				<i className="bi bi-list"></i>
			</button>

			<div
				className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}
			>
				<Link to="/" className="navbar__link">
					Inicio
				</Link>
				<Link to="/categoria/hoodies" className="navbar__link">
					Hoodies
				</Link>
				<Link to="/categoria/camisetas" className="navbar__link">
					Camisetas
				</Link>
				<Link to="#" className="navbar__link">
					Blog
				</Link>
				<Link to="#" className="navbar__link">
					Contacto
				</Link>
			</div>

			<div className="navbar__icons d-flex align-items-center">
				<Link href="#" className="navbar__icon-link">
					<i className="bi bi-search navbar__icon"></i>
				</Link>

				<Link href="#" className="navbar__icon-link">
					<CartWidget />
				</Link>

				<Link href="#" className="navbar__icon-link">
					<i className="bi bi-person navbar__icon"></i>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
