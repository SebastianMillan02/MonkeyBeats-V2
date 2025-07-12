import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import Item from './Item';

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const productosRef = collection(db, 'productos');

		getDocs(productosRef)
			.then((snapshot) => {
				const productosData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProductos(productosData);
			})
			.catch((error) => {
				console.error('Error al obtener los productos:', error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <p style={{ textAlign: "center", color: "white" }} className="loading">Cargando productos...</p>;

	return (
		<section className="tienda__productos">
			{productos.map((prod) => (
				<Item
					key={prod.id}
					id={prod.id}
					nombre={prod.nombre}
					img={prod.img}
					precio={prod.precio}
				/>
			))}
		</section>
	);
};

export default ItemListContainer;