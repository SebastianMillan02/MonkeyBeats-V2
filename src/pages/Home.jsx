import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			{/* Banner Principal */}
			<section className="hero">
				<div className="hero__info">
					<h5 className="hero__subtitle">Desata tu estilo salvaje</h5>
					<h1 className="hero__title">
						¡Viste con la actitud y energía de la naturaleza!
					</h1>
					<p className="hero__text">
						Sumérgete en el mundo de la moda rebelde donde los monos
						son los protagonistas. Desde camisetas atrevidas hasta
						accesorios que desafían lo convencional, cada pieza está
						diseñada para quienes no temen destacar. Con nuestras
						colecciones únicas, tu look será tan audaz y vibrante
						como tú. ¡Atrévete a marcar la diferencia y conquista
						las calles con estilo!
					</p>
					<div className="hero__info-buttons">
						<Link to="/productos" className="hero__button--primary">
							Comprar ahora
						</Link>
						<Link to="/" className="hero__button--secondary">
							Visita nuestro blog
						</Link>
					</div>
				</div>
				<div className="hero__image">
					<img
						src="/images/hero-img.png"
						alt="Mono con gafas y ropa urbana"
					/>
				</div>
			</section>

			{/* Beneficios */}
			<section className="beneficios dark-bg">
				<h2 className="beneficios__title">
					¿Por qué somos la mejor opción?
				</h2>
				<div className="beneficios__item">
					<div className="beneficio__icon">
						<i className="bi bi-truck" />
					</div>
					<p className="beneficio__title">Envíos Internacionales</p>
				</div>
				<div className="beneficios__item">
					<div className="beneficio__icon">
						<i className="bi bi-cart-check" />
					</div>
					<p className="beneficio__title">Facilidad de compra</p>
				</div>
				<div className="beneficios__item">
					<div className="beneficio__icon">
						<i className="bi bi-chat-dots" />
					</div>
					<p className="beneficio__title">Soporte 24/7 todo el año</p>
				</div>
				<div className="beneficios__item">
					<div className="beneficio__icon">
						<i className="bi bi-shield-lock" />
					</div>
					<p className="beneficio__title">Pagos seguros</p>
				</div>
			</section>

			{/* Ofertas */}
			<section className="ofertas">
				<div className="ofertas__horizontal-card">
					<div className="oferta__info">
						<h5 className="oferta__subtitle">
							40% OFF en la segunda unidad
						</h5>
						<h4 className="oferta__title">
							Duplica tu estilo con nuestras ofertas especiales
						</h4>
						<p className="oferta__text">
							Desde diseños exclusivos hasta básicos
							imprescindibles, nuestra oferta te da más razones
							para brillar con confianza. ¡Actúa rápido y haz tu
							compra hoy mismo para no perderte esta oferta
							imperdible!
						</p>
						<Link to="/" className="oferta__button">
							Ver detalles
						</Link>
					</div>
					<img
						src="/images/monos-oferta-horizontal.jpg"
						alt="Mono gracioso con sombrero"
						className="oferta__image--horizontal"
					/>
					<img
						src="/images/monos-oferta-horizontal-tablet.jpg"
						alt="Mono gracioso con sombrero y gafas"
						className="oferta__image--horizontal--tablet"
					/>
				</div>
				<div className="ofertas__individual-card sale-ind-1">
					<h5 className="oferta__subtitle">Últimas unidades</h5>
					<p>50% OFF</p>
				</div>
				<div className="ofertas__individual-card sale-ind-2">
					<h5 className="oferta__subtitle">
						No te quedes con las ganas
					</h5>
					<p>20% OFF</p>
				</div>
				<div className="ofertas__vertical-card">
					<h5 className="oferta__subtitle">
						Bienvenido a tu Nueva Marca Favorita
					</h5>
					<h4 className="oferta__title">
						Compra con impacto: Tu compra beneficia a la
						conservación de los monos
					</h4>
					<p className="oferta__text">
						Compra tres artículos y paga solo dos, el de menor valor
						va de regalo. Además, con cada compra, destinamos un
						porcentaje de nuestras ganancias a fundaciones que
						apoyan la protección de los monos. ¡Aprovecha esta
						oferta increíble para diversificar tu estilo y apoyar
						una causa que necesita tu ayuda!
					</p>
					<Link to="/" className="oferta__button">
						Quiero ayudar
					</Link>
					<img
						src="/images/monos-oferta-vertical.jpg"
						alt="Monos compartiendo flotando sobre bananas"
						className="oferta__image--vertical"
					/>
				</div>
			</section>

			{/* Categorías destacadas */}
			<section className="categorias-destacadas">
				<h2 className="categorias-destacadas__main-title">
					Categorías destacadas
				</h2>
				<div className="categorias-destacadas__item">
					<div className="categorias-destacadas__image">
						<img
							src="/images/categoria-edicion-limitada.jpeg"
							alt="Edición Limitada"
						/>
					</div>
					<h4 className="categorias-destacadas__title">Exclusive</h4>
				</div>
				<div className="categorias-destacadas__item">
					<div className="categorias-destacadas__image">
						<img
							src="/images/categoria-accesorios.jpeg"
							alt="Accesorios"
						/>
					</div>
					<h4 className="categorias-destacadas__title">Accesorios</h4>
				</div>
				<div className="categorias-destacadas__item">
					<div className="categorias-destacadas__image">
						<img
							src="/images/categoria-vintage.jpeg"
							alt="Vintage"
						/>
					</div>
					<h4 className="categorias-destacadas__title">Vintage</h4>
				</div>
				<div className="categorias-destacadas__item">
					<div className="categorias-destacadas__image">
						<img
							src="/images/categoria-deportiva.jpeg"
							alt="Deportiva"
						/>
					</div>
					<h4 className="categorias-destacadas__title">Deportiva</h4>
				</div>
			</section>

			{/* Formulario de contacto */}
			<section className="horizontal-form">
				<div className="horizontal-form__content">
					<h2>¿Quieres decirnos algo?</h2>
					<form>
						<div className="form__row">
							<div className="form__group">
								<input
									type="text"
									id="nombre"
									placeholder="Nombre"
								/>
							</div>
							<div className="form__group">
								<input
									type="text"
									id="apellidos"
									placeholder="Apellidos"
								/>
							</div>
						</div>
						<div className="form__group">
							<input
								type="email"
								id="correo"
								placeholder="Correo electrónico"
							/>
						</div>
						<div className="form__group">
							<textarea
								id="mensaje"
								placeholder="Tu mensaje aquí"
								style={{ height: 100 }}
							></textarea>
						</div>
						<div className="form__submit">
							<button
								type="submit"
								className="horizontal-form__button--submit"
							>
								Enviar mensaje
							</button>
						</div>
					</form>
				</div>
				<img
					src="/images/imagen-mono-formulario.png"
					alt="Mono sonriendo con camisa de botones"
					className="horizontal-form__image"
				/>
			</section>
		</main>
	);
};

export default Home;
