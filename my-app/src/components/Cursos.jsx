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
// import { queryCollection } from '../firebase/firebaseFunctions'

export const Cursos = () => {
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

	useEffect(() => {
		const queryFilter = query(
			queryCollection,
			where('category', '==', category)
		)
		const fetchCourses = async () => {
			dispatch({ type: 'Fetch-Request' })
			getDocs(queryFilter)
				.then((resp) =>
					dispatch({
						type: 'Cursos',
						payload: resp.docs.map((course) => ({
							id: course.id,
							...course.data(),
						})),
					})
				)

				.catch(() => console.log(error))
		}
		fetchCourses()
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
							service={service}
						/>
					</div>
				))
			)}
		</ItemSContainer>
	)
}
