import { collection, getFirestore } from 'firebase/firestore'

export const querydb = getFirestore()
export const queryCollection = collection(querydb, 'cursos')

export const reducer = (state, action) => {
	switch (action.type) {
		case 'Fetch-Request':
			return { ...state, loading: true }
		case 'Audiolibros':
			return {
				...state,
				loading: false,
				category: 'Audiolibros',
				service: action.payload,
			}
		case 'Cursos':
			return {
				...state,
				loading: false,
				category: 'Cursos',
				service: action.payload,
				cursos: action.payload,
			}

		case 'Especializados':
			return {
				...state,
				loading: false,
				category: 'Especializados',
				service: action.payload,
			}
		default:
			return state
	}
}
