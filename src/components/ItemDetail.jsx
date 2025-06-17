const ItemDetail = ({ producto }) => {
  return (
    <section className="producto-individual">

      <div className="producto-individual__galeria">
        <div className="producto-individual__galeria__main-image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="producto-individual__galeria__thumbnail">
          <img src={producto.imagen} alt="Imagen secundaria 1" />
        </div>
        <div className="producto-individual__galeria__thumbnail">
          <img src={producto.imagen} alt="Imagen secundaria 2" />
        </div>
        <div className="producto-individual__galeria__thumbnail">
          <img src={producto.imagen} alt="Imagen secundaria 3" />
        </div>
      </div>


      <div className="producto-individual__main-container">
        <div className="producto-individual__details">
          <h5 className="producto-individual__details__subtitle">Edición limitada</h5>
          <h2 className="producto-individual__details__title">{producto.nombre}</h2>

          <div className="producto-individual__details__reviews">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <p>4.9</p>
          </div>

          <p className="producto-individual__details__text">
            {producto.descripcion}
          </p>

          <div className="producto-individual__details__price">
            ${producto.precio}
          </div>

          <div className="producto-individual__details__actions">
            <a href="#" className="producto-individual__button--primary">Añadir al carrito</a>

            <div className="producto-individual__details__qty">
              <button className="btn_qty" type="button">
                <i className="bi bi-plus" />
              </button>
              <input
                type="text"
                className="qty_text"
                value="1"
                readOnly
              />
              <button className="btn_qty" type="button">
                <i className="bi bi-dash" />
              </button>
            </div>
          </div>
        </div>

        <div className="producto-individual__details__cupon">
          <h3>¡Tenemos un descuento especial para ti!</h3>
          <div className="cupon__box">
            <p className="cupon__box__title">15% OFF si es tu primera compra</p>
            <p className="cupon__box__text">usando el código: SAVEMONKEYS15</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
