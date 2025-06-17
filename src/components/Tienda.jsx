import Item from "./Item";

const Tienda = ({ items }) => {
  return (
    <div className="tienda">
      <aside className="tienda__sidebar">
        <h3 className="tienda__sidebar__title">Precio</h3>
        <input type="range" min="0" max="200000" className="tienda__sidebar__range" />

        <h3 className="tienda__sidebar__title">Material</h3>
        <div className="tienda__sidebar__filters">
          <button className="tienda__sidebar__btn">Algodón</button>
          <button className="tienda__sidebar__btn">Satín</button>
          <button className="tienda__sidebar__btn">Seda</button>
          <button className="tienda__sidebar__btn">Cuero</button>
        </div>

        <h3 className="tienda__sidebar__title">Color</h3>
        <div className="tienda__sidebar__filters">
          <button className="tienda__sidebar__btn">Negro</button>
          <button className="tienda__sidebar__btn">Amarillo</button>
          <button className="tienda__sidebar__btn">Naranja</button>
          <button className="tienda__sidebar__btn">Café</button>
          <button className="tienda__sidebar__btn">Multicolor</button>
        </div>
      </aside>

      <div className="tienda__productos">
        {items.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Tienda;
