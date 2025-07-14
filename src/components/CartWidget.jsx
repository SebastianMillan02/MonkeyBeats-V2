import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	const { cartItemCount } = useContext(CartContext);

	return (
		<Link to="/carrito" className="navbar__icon-link navbar__icon-cart">
			<i className="bi bi-handbag navbar__icon"></i>
			{cartItemCount() > 0 && (
				<span className="cart-count">{cartItemCount()}</span>
			)}
		</Link>
	);
};

export default CartWidget;
