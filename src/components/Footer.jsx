import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer">
			<button
				className="back-to-top-btn"
				onClick={() =>
					document
						.getElementById('pre-header')
						?.scrollIntoView({ behavior: 'smooth' })
				}
			>
				<i className="bi bi-arrow-up" />
			</button>

			{/* Footer Principal */}
			<div className="footer__content">
				<div className="footer__logo">
					<Link to="/">
						<img
							src="/images/Monkey-Beats-Logo.png"
							alt="Logo Monkey Beats"
						/>
					</Link>
				</div>

				<div className="footer__main-menu">
					<h4>Menú Principal</h4>
					<ul className="footer__menu">
						<li>
							<Link to="/" className="navbar__link nav-link">
								Inicio
							</Link>
						</li>
						<li>
							<Link to="/productos" className="navbar__link nav-link">
								Productos
							</Link>
						</li>
						<li>
							<Link
								to="/producto/ejemplo"
								className="navbar__link nav-link"
							>
								Producto Individual
							</Link>
						</li>
						<li>
							<Link to="/" className="navbar__link nav-link">
								Blog
							</Link>
						</li>
						<li>
							<Link to="/" className="navbar__link nav-link">
								Contacto
							</Link>
						</li>
					</ul>
				</div>

				<div className="footer__legal-menu">
					<h4>Menú Legal</h4>
					<ul className="footer__menu">
						<li>
							<Link to="/" className="navbar__link nav-link">
								Términos y condiciones
							</Link>
						</li>
						<li>
							<Link to="#" className="navbar__link nav-link">
								Política de privacidad
							</Link>
						</li>
						<li>
							<Link to="/" className="navbar__link nav-link">
								Política de cookies
							</Link>
						</li>
						<li>
							<Link to="/" className="navbar__link nav-link">
								Cambios y reembolsos
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Post Footer */}
			<div className="post-footer">
				<p className="post-footer__copyright">
					Copyright 2025 | Sebastián Millán Higuita | Todos los derechos reservados.
				</p>
				<div className="post-footer__social-icons">
					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/icons/YouTube-Blanco.png"
							alt="Logo YouTube"
							className="post-footer__social-icon"
						/>
					</a>
					<a
						href="https://web.facebook.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/icons/Facebook-Blanco.png"
							alt="Logo Facebook"
							className="post-footer__social-icon"
						/>
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/icons/Instagram-Blanco.png"
							alt="Logo Instagram"
							className="post-footer__social-icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
