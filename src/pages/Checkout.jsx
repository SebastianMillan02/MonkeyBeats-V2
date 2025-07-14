import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Checkout = () => {

    return (
        <main>
            <Hero
				title="¡Gracias!"
				backgroundImage="../images/banner-blog.jpg"
			/>

            <div className="checkout-info">
					<h2>Hemos recibido tu pedido</h2>
                    <p>Tu pedido ha sido recibido con éxito y ya está siendo procesado. Pronto recibirás un correo con los detalles. Gracias por apoyar a Monkey Beats y contribuir a una causa que marca la diferencia. 🐒🎵</p>
					<Link to="/" className="hero__button--primary">
						Volver al inicio
					</Link>
				</div>

        </main>
    );
}

export default Checkout;