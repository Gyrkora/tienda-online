import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from '../components/ItemDetailContainer'
// import { DetailContainer } from "../styles/ItemDetail.styles";

const DetailPage = () => {
	let { detalleId } = useParams()

	return (
		// <DetailContainer>
		<div>
			{/* <h1> Detalle </h1> */}
			<ItemDetailContainer id={detalleId} />
		</div>
		// </DetailContainer>
	)
}

export default DetailPage
