import { useReducer } from 'react'
import { getFirebaseInit } from '../firebase/configFB'
import { reducer } from '../firebase/firebaseFunctions'
import { useEffect } from 'react'
import { ItemSContainer } from '../styles/ItemListContainer.style'
import { Item } from './Item'
import {
	getDocs,
	query,
	where,
	getFirestore,
	collection,
} from 'firebase/firestore'

export const Audiolibros = () => {
	const [{ loading, error, category, service }, dispatch] = useReducer(
		reducer,
		{
			category: '',
			loading: true,
			error: '',
			service: [],
		}
	)
	getFirebaseInit()
	const querydb = getFirestore()
	const queryCollection = collection(querydb, 'cursos')
	const queryFilter = query(queryCollection, where('category', '==', category))

	useEffect(() => {
		const fetchServices = async () => {
			dispatch({ type: 'Fetch-Request' })
			getDocs(queryFilter)
				.then((resp) =>
					dispatch({
						type: 'Audiolibros',
						payload: resp.docs.map((course) => ({
							id: course.id,
							...course.data(),
						})),
					})
				)

				.catch(() => console.log(error))
		}
		fetchServices()
	}, [category])

	return (
		<ItemSContainer>
			{loading ? (
				<h2>cargando</h2>
			) : (
				service.map((course) => (
					<div key={course.id}>
						<Item
							courseName={course.courseName}
							photo={course.photo}
							price={course.price}
							id={course.id}
						/>
					</div>
				))
			)}
		</ItemSContainer>
	)
}
