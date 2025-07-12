import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<header>
			{/* Pre-header */}
			<div className="pre-header" id="pre-header">
				<div className="pre-header__social-icons">
					<p className="pre-header__social-text">Síguenos</p>
					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/icons/YouTube.png"
							alt="YouTube"
							className="pre-header__social-icon"
						/>
					</a>
					<a
						href="https://web.facebook.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/icons/Facebook.png"
							alt="Facebook"
							className="pre-header__social-icon"
						/>
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/icons/Instagram.png"
							alt="Instagram"
							className="pre-header__social-icon"
						/>
					</a>
				</div>

				<div className="pre-header__promo-text">
					<p>Envíos gratis por compras mayores a 150.000</p>
				</div>

				<div className="pre-header__contact">
					<img
						src="/images/icons/Phone.png"
						alt="Llamada"
						className="pre-header__contact-icon"
					/>
					<a
						href="tel:+573213213210"
						className="pre-header__contact-number"
					>
						+57 (321) 321 - 3210
					</a>
				</div>
			</div>

			{/* Navbar */}
			<nav className="navbar">
				<Link
					to="/"
					className="navbar__logo-link"
					onClick={handleLinkClick}
				>
					<img
						src="/images/Monkey-Beats-Logo-Horizontal.png"
						alt="Monkey Beats"
						className="navbar__logo"
					/>
				</Link>

				<button
					className="navbar__toggle"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Abrir menú"
				>
					<i className="bi bi-list"></i>
				</button>

				<div className={`navbar__menu ${menuOpen ? 'is-active' : ''}`}>
					<NavLink
						to="/"
						className="navbar__link"
						onClick={handleLinkClick}
					>
						Inicio
					</NavLink>
					<NavLink
						to="/productos"
						className="navbar__link"
						onClick={handleLinkClick}
					>
						Productos
					</NavLink>
					<NavLink
						to="/categoria/vintage"
						className="navbar__link"
						onClick={handleLinkClick}
					>
						Vintage
					</NavLink>
					<NavLink
						to="/categoria/deportiva"
						className="navbar__link"
						onClick={handleLinkClick}
					>
						Deportiva
					</NavLink>
					<NavLink
						to="/categoria/exclusive"
						className="navbar__link"
						onClick={handleLinkClick}
					>
						Exclusive
					</NavLink>
				</div>

				<div className="navbar__icons">
					<Link
						to="/busqueda"
						className="navbar__icon-link"
						onClick={handleLinkClick}
					>
						<img
							src="/images/icons/search.svg"
							alt="Buscar"
							className="navbar__icon"
						/>
					</Link>
					<Link
						to="/carrito"
						className="navbar__icon-link"
						onClick={handleLinkClick}
					>
						<img
							src="/images/icons/bag.svg"
							alt="Carrito"
							className="navbar__icon"
						/>
					</Link>
					<Link
						to="/login"
						className="navbar__icon-link"
						onClick={handleLinkClick}
					>
						<img
							src="/images/icons/user.svg"
							alt="Usuario"
							className="navbar__icon"
						/>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
