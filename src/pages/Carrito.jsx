import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { confirmarEliminarProducto, confirmarVaciarCarrito } from '../helpers/alerts';

const Carrito = () => {
	const { cart, removeFromCart, clearCart, cartTotal, cartQuantity } =
		useContext(CartContext);

	if (cart.length === 0) {
		return (
			<main className="carrito-vacio">
				<Hero
					title="Carrito de compras"
					backgroundImage="../images/banner-contacto.jpg"
				/>

				<div className="carrito-vacio__info">
					<h2>Tu carrito está vacío 🛒</h2>
					<Link to="/productos" className="hero__button--primary">
						Ir a la tienda
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="carrito">
			<Hero
				title="Carrito de compras"
				backgroundImage="../images/banner-contacto.jpg"
			/>

			<div className="carrito-info">
				<section className="carrito__items">
					{cart.map((item) => (
						<div key={item.id} className="carrito__item">
							<img
								src={item.img}
								alt={item.nombre}
								className="carrito__item-img"
							/>
							<div className="carrito__item-info">
								<h4>{item.nombre}</h4>
								<p>Cantidad: {item.cantidad}</p>
								<p>
									Precio unitario: $
									{item.precio.toLocaleString()}
								</p>
								<p>
									Subtotal: $
									{(
										item.precio * item.cantidad
									).toLocaleString()}
								</p>
								<button
									className="hero__button--secondary eliminar-carito"
									onClick={() => confirmarEliminarProducto(() => removeFromCart(item.id))}
								>
									Eliminar
								</button>
							</div>
						</div>
					))}
				</section>

				<section className="carrito__resumen">
					<h3>Total: ${cartTotal().toLocaleString()}</h3>
					<p>Total de unidades: {cartQuantity()}</p>
					<div className="carrito__acciones">
						<button className="hero__button--secondary" onClick={() => confirmarVaciarCarrito(clearCart)}>
							Vaciar carrito
						</button>
						<Link to="/checkout" className="hero__button--primary">
							Finalizar compra
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Carrito;
