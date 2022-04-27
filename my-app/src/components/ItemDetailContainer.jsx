import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

export const ItemDetailContainer = ({ id }) => {
	const [loading, setLoading] = useState(true)
	const [course, setCourse] = useState({})

	useEffect(() => {
		const querydb = getFirestore()
		const queryCourse = doc(querydb, 'cursos', id) //llamado, nombre de la base y el id del producto
		getDoc(queryCourse) //promesa
			.then((resp) => setCourse({ id: resp.id, ...resp.data() }))
			.catch(() => console.log('esto es un error'))
			.finally(() => setLoading(false))
	}, [id])

	return (
		<div>{loading ? <h2>Cargando...</h2> : <ItemDetail item={course} />}</div>
	)
}
