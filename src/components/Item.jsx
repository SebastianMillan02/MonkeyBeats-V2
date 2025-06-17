import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <div className="producto__image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="producto__info">
        <div className="producto__info__text">
          <p className="producto__info__text--title">{producto.nombre}</p>
          <p className="producto__info__text--price">${producto.precio}</p>
        </div>
        <div className="producto__info__button">
          <Link to={`/item/${producto.id}`}>
            <i className="bi bi-plus-circle-fill"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
