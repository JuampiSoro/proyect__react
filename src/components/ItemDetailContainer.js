import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getItem } from "../app/api"
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ({ id }) => {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        // getItem(id).then((data) => {
        //     setDetails(data)
        // });
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "productos", id);
        getDoc(queryDoc).then(res => setDetails({ id: res.id, ...res.data() }))

    }, []);

    return (
        <div className="item__detail__container__page">
            <ItemDetail detalle="Detalle de producto" data={details} />
        </div>
    )
}

export default ItemDetailContainer