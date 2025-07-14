import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState(null);
	const [cantidad, setCantidad] = useState(1);
	const { addToCart } = useContext(CartContext);

	const handleAgregar = () => {
		addToCart(producto, cantidad);

		Swal.fire({
			title: 'Producto agregado',
			text: `${cantidad} "${producto.nombre}" añadido(s) al carrito.`,
			icon: 'success',
			confirmButtonColor: '#bf9a0f',
			timer: 5000,
			showConfirmButton: false,
			toast: true,
			position: 'bottom-end',
			customClass: {
				popup: 'mi-toast',
				title: 'mi-toast-title',
				htmlContainer: 'mi-toast-text',
				icon: 'mi-toast-icon',
			},
		});
	};

	useEffect(() => {
		const fetchProducto = async () => {
			try {
				const docRef = doc(db, 'productos', id);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setProducto({ id: docSnap.id, ...docSnap.data() });
				} else {
					console.log('No existe ese producto');
				}
			} catch (error) {
				console.error('Error al obtener el producto:', error);
			}
		};

		fetchProducto();
	}, [id]);

	if (!producto) return <p>Cargando producto...</p>;

	return (
		<main>
			<section className="hero-producto-individual container-fluid">
				<h1>{producto.nombre}</h1>
			</section>

			<section className="breadcrumb">
				<Link to="/productos">Volver al listado de productos</Link>
			</section>

			<section className="producto-individual">
				<div className="producto-individual__galeria">
					<div className="producto-individual__galeria__main-image">
						<img src={producto.img} alt={producto.nombre} />
					</div>
					{[...Array(3)].map((_, i) => (
						<div
							className="producto-individual__galeria__thumbnail"
							key={i}
						>
							<img
								src={producto.img}
								alt={`Miniatura ${i + 1}`}
							/>
						</div>
					))}
				</div>

				<div className="producto-individual__main-container">
					<div className="producto-individual__details">
						<h5 className="producto-individual__details__subtitle">
							{producto.categoria}
						</h5>
						<h2 className="producto-individual__details__title">
							{producto.nombre}
						</h2>

						<div className="producto-individual__details__reviews">
							<i className="bi bi-star-fill"></i>
							<p>{producto.calificacion}</p>
						</div>

						<p className="producto-individual__details__text">
							{producto.descripcion}
						</p>

						<div className="producto-individual__details__price">
							${' '}
							{producto.precio.toLocaleString('es-CO', {
								style: 'decimal',
								maximumFractionDigits: 0,
							})}
						</div>

						<div className="producto-carrito">
							<div className="producto-individual__details__buttons">
								<button
									className="producto-individual__button--primary"
									onClick={handleAgregar}
								>
									Añadir al carrito
								</button>
							</div>
							<div className="producto-individual__details__qty">
								<button
									className="btn_qty"
									onClick={() =>
										setCantidad((prev) =>
											Math.max(prev - 1, 1)
										)
									}
								>
									<i className="bi bi-dash-lg">-</i>
								</button>

								<input
									type="text"
									className="qty_text"
									value={cantidad}
									readOnly
								/>

								<button
									className="btn_qty"
									onClick={() =>
										setCantidad((prev) => prev + 1)
									}
								>
									<i className="bi bi-plus-lg">+</i>
								</button>
							</div>
						</div>
					</div>

					<div className="producto-individual__details__cupon">
						<h3>¡Tenemos un descuento especial para ti!</h3>
						<div className="cupon__box">
							<p className="cupon__box__title">
								15% OFF si es tu primera compra
							</p>
							<p className="cupon__box__text">
								usando el código: <strong>SAVEMONKEYS15</strong>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ItemDetail;
