import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import { Cart } from './Cart'

export const Formulario = ({ ordenID }) => {
	const [sendFormulario, setSendFormulario] = useState(false)

	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
				}}
				validate={(valores) => {
					let errores = {}

					if (!valores.nombre) {
						errores.nombre = 'por favor ingresa un nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre = 'El nombre sólo puede contener letras y espacios'
					}

					if (!valores.correo) {
						errores.correo = 'por favor ingresa un correo electrónico'
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							valores.correo
						)
					) {
						errores.correo =
							'El correo sólo puede contener letras, números, puntos, guiones, y guión bajo.'
					}

					return errores
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm()
					console.log('datos enviados')
					setSendFormulario(true)
					setTimeout(() => setSendFormulario(false), 5000)
				}}
			>
				{({ errors }) => (
					<Form>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text"
								id="nombre"
								name="nombre"
								placeholder="John Doe"
							/>
							<ErrorMessage
								name="nombre"
								component={() => <div>{errors.nombre}</div>}
							/>
						</div>
						<div>
							<label htmlFor="correo">correo</label>
							<Field type="text" id="correo" name="correo" placeholder="@" />
							<ErrorMessage
								name="correo"
								component={() => <div>{errors.correo}</div>}
							/>
						</div>
						<Field name="pais" as="select">
							<option value="mexico">México</option>
							<option value="Chile">Chile</option>
							<option value="Argentina">Argentina</option>
						</Field>
						<div></div>
						<button type="submit">Enviar</button>
						{sendFormulario && <p>Formulario enviado con éxito</p>}
					</Form>
				)}
			</Formik>
		</>
	)
}
