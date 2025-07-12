import { Link } from 'react-router-dom';

const Item = ({ id, nombre, img, precio }) => {
	return (
		<article className="producto">
			<div className="producto__image">
				<Link to={`/producto/${id}`}>
					<img src={img} alt={nombre} />
				</Link>
			</div>

			<div className="producto__info">
				<div className="producto__info__text">
					<h3 className="producto__info__text--title">{nombre}</h3>
					<p className="producto__info__text--price">
						${precio.toLocaleString()}
					</p>
				</div>

				<div className="producto__info__button">
					<Link to={`/producto/${id}`}>
						<i className="bi bi-cart-plus"></i>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Item;
