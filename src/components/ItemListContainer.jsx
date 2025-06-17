import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/products';
import Tienda from './Tienda';

const getProductos = (categoriaId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (categoriaId) {
				resolve(productos.filter((p) => p.categoria === categoriaId));
			} else {
				resolve(productos);
			}
		}, 500);
	});
};

const ItemListContainer = ({ greeting }) => {
	const { categoriaId } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		getProductos(categoriaId).then((res) => setItems(res));
	}, [categoriaId]);

	return (
		<>
			<section className="hero-productos">
				<h1>
					{categoriaId
						? `Categoría: ${
								categoriaId.charAt(0).toUpperCase() +
								categoriaId.slice(1)
						  }`
						: greeting}
				</h1>
			</section>
			<Tienda items={items} />
		</>
	);
};

export default ItemListContainer;
