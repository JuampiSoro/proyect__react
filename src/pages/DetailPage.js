import ItemDetailContainer from "../components/ItemDetailContainer"

import { useParams } from "react-router-dom"

const DetailPage = () => {
    const { id } = useParams();


    return (
        <>
            <ItemDetailContainer id={id} />
        </>
    )
}

export default DetailPage