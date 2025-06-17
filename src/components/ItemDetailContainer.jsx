import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/products";
import ItemDetail from "./ItemDetail";

const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === id));
    }, 500);
  });
};

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(itemId).then((res) => setProducto(res));
  }, [itemId]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <>
      <section className="hero-producto-individual container-fluid">
        <h1>{producto.nombre}</h1>
      </section>
      <ItemDetail producto={producto} />
    </>
  );
}

export default ItemDetailContainer;
