import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getItem } from "../app/api"

const ItemDetailContainer = () => {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        getItem().then((data) => {
            setDetails(data)
        });

    }, []);

    return (
        <ItemDetail detalle="Detalle de producto" title={details.title} info={details.info} pictureUrl={details.pictureUrl} />
    )
}

export default ItemDetailContainer