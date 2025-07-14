import Swal from 'sweetalert2';

export const confirmarEliminarProducto = (onConfirm) => {
	Swal.fire({
		title: '¿Eliminar producto?',
		text: 'Este producto será eliminado del carrito.',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#6c4917',
		cancelButtonColor: '#3f2609',
		confirmButtonText: 'Sí, eliminar',
		cancelButtonText: 'Cancelar',
		customClass: {
			popup: 'mi-toast',
			title: 'mi-toast-title',
			htmlContainer: 'mi-toast-text',
			icon: 'mi-toast-icon',
		},
	}).then((result) => {
		if (result.isConfirmed) {
			onConfirm();
			Swal.fire({
				title: 'Eliminado',
				text: 'El producto ha sido eliminado del carrito.',
				icon: 'success',
				timer: 1500,
				showConfirmButton: false,
				toast: true,
				position: 'bottom-end',
				customClass: {
					popup: 'mi-toast',
					title: 'mi-toast-title',
					htmlContainer: 'mi-toast-text',
					icon: 'mi-toast-icon',
				},
			});
		}
	});
};

export const confirmarVaciarCarrito = (onConfirm) => {
	Swal.fire({
		title: '¿Vaciar carrito?',
		text: 'Todos los productos serán eliminados.',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#6c4917',
		cancelButtonColor: '#3f2609',
		confirmButtonText: 'Sí, vaciar',
		cancelButtonText: 'Cancelar',
		customClass: {
					popup: 'mi-toast',
					title: 'mi-toast-title',
					htmlContainer: 'mi-toast-text',
					icon: 'mi-toast-icon',
				},
	}).then((result) => {
		if (result.isConfirmed) {
			onConfirm();
			Swal.fire({
				title: 'Carrito vacío',
				icon: 'success',
				timer: 1500,
				showConfirmButton: false,
				toast: true,
				position: 'bottom-end',
				customClass: {
					popup: 'mi-toast',
					title: 'mi-toast-title',
					htmlContainer: 'mi-toast-text',
					icon: 'mi-toast-icon',
				},
			});
		}
	});
};
