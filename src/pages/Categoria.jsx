import { useParams } from 'react-router-dom';

const Categoria = () => {
  const { categoriaId } = useParams();

  return (
    <div className="categoria">
      <h2>Categoría seleccionada: {categoriaId}</h2>
    </div>
  );
};

export default Categoria;