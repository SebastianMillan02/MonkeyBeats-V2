import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item, cantidad) => {
		const itemExistente = cart.find((prod) => prod.id === item.id);
		if (itemExistente) {
			const updatedCart = cart.map((prod) =>
				prod.id === item.id
					? { ...prod, cantidad: prod.cantidad + cantidad }
					: prod
			);
			setCart(updatedCart);
			console.log(updatedCart);
		} else {
			setCart([...cart, { ...item, cantidad }]);
		}
	};

	const removeFromCart = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	const cartTotal = () => {
		return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
	};

	const cartQuantity = () => {
		return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
	};

	const cartItemCount = () => {
		return cart.length;
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				cartTotal,
				cartQuantity,
				cartItemCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
