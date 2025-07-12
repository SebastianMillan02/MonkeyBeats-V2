import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import Item from "../components/Item";

const Categoria = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("categoria", "==", categoriaId));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(docs);
      } catch (error) {
        console.error("Error al traer productos:", error);
      }
    };

    fetchProductos();
  }, [categoriaId]);

  return (
    <main>
      <section className="hero-productos">
        <h1 className="text-center">Categoría: {categoriaId}</h1>
      </section>

      <section className="tienda__productos">
        {productos.length > 0 ? (
          productos.map(producto => (
            <Item key={producto.id} {...producto} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "white" }}>No hay productos en esta categoría.</p>
        )}
      </section>
    </main>
  );
};

export default Categoria;
