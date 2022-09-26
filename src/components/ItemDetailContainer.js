import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getItem } from "../app/api"

const ItemDetailContainer = ({ id }) => {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        getItem(id).then((data) => {
            setDetails(data)
        });

    }, []);

    return (
        <div className="item__detail__container__page">
            <ItemDetail detalle="Detalle de producto" data={details} />
        </div>
    )
}

export default ItemDetailContainer