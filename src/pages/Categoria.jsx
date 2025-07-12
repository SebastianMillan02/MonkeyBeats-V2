import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';

const Categoria = () => {
  const { categoriaId } = useParams();
  const capitalizeWords = (str) =>
  str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return <Hero
			title={capitalizeWords(categoriaId)}
			backgroundImage="../images/banner-blog.jpg"
		/>
};

export default Categoria;