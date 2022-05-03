import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from '../components/ItemDetailContainer'
// import { DetailContainer } from "../styles/ItemDetail.styles";

const DetailPage = () => {
	let { detalleId } = useParams()

	return (
		<div>
			<ItemDetailContainer id={detalleId} />
		</div>
	)
}

export default DetailPage
