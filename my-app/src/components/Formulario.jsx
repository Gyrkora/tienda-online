import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import { CartButton } from '../styles/Cart.styles'
import {
	FormAlarm,
	FormularioCard,
	InputContainer,
	OrderFilled,
} from '../styles/Formulario.styles'

export const Formulario = () => {
	const [valorNombre, setValorNombre] = useState(false)
	const [valorEmail, setValorEmail] = useState(false)

	return (
		<FormularioCard>
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
				onSubmit={(values, { resetForm }) => {
					resetForm()
					setValorNombre(values.nombre)
					setValorEmail(values.correo)
					console.log(values.nombre)
				}}
			>
				{({ errors }) => (
					<Form>
						<InputContainer>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text"
								id="nombre"
								name="nombre"
								placeholder="John Doe"
							/>
							<ErrorMessage
								name="nombre"
								component={() => <FormAlarm>{errors.nombre}</FormAlarm>}
							/>
						</InputContainer>
						<InputContainer>
							<label htmlFor="correo">correo</label>
							<Field type="text" id="correo" name="correo" placeholder="@" />
							<ErrorMessage
								name="correo"
								component={() => <FormAlarm>{errors.correo}</FormAlarm>}
							/>
						</InputContainer>
						<InputContainer>
							<label htmlFor="formaPago" className="labelPago">
								Método de pago
							</label>
							<br></br>
							<Field name="formaPago" as="select">
								<option value="Visa">Visa</option>
								<option value="Débito">Débito</option>
								<option value="PayPal">PayPal</option>
							</Field>
						</InputContainer>

						<CartButton type="submit">Enviar</CartButton>

						{
							<OrderFilled>
								<p>Nombre: {valorNombre}</p>
								<p>Email: {valorEmail}</p>
							</OrderFilled>
						}
					</Form>
				)}
			</Formik>
		</FormularioCard>
	)
}
