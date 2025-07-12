import Hero from '../components/Hero';
import ItemListContainer from '../components/ItemListContainer';

const Productos = () => {
	return (
		<main>
			<Hero
				title="Nuestros Productos"
				backgroundImage="../images/banner-productos.jpg"
				backgroundPositionY="20%"
			/>

            <ItemListContainer />
		</main>
	);
};

export default Productos;
