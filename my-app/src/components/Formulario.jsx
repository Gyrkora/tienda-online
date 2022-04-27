import React from 'react'

export const Formulario = () => {
	let inputCorreo = ''
	let inputNombre = ''

	return (
		<>
			<form>
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input type="text" id="nombre" name="nombre" placeholder="John Doe" />
				</div>
				<div>
					<label htmlFor="correo">correo</label>
					<input type="text" id="correo" name="correo" placeholder="@" />
				</div>
				<button type="submit">Enviar</button>
			</form>
		</>
	)
}
