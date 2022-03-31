import { useParams } from "react-router-dom"
import { ItemDetailContainer } from "../components/ItemDetailContainer"



const DetailPage = () => {
    let { detalleId } = useParams()

  return (
    <div>
        <h1> Este es el detalle del curso</h1>
        <ItemDetailContainer id={detalleId}/>
    </div>
  )
}

export default DetailPage