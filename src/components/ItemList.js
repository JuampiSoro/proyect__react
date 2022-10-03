import Item from "./Item"
import { useEffect, useState } from "react";
import { getProductos } from "../app/api";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

const ItemList = () => {
    const [item, setItem] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos");

        if (idCategoria) {
            const queryFilter = query(queryCollection, where("categoria", "==", idCategoria))
            getDocs(queryFilter).then(res => setItem(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection).then(res => setItem(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [idCategoria]);

    return (
        <>
            {
                item.map((each, key) => <Item id={each.id} title={each.title} price={each.price} pictureUrl={each.pictureUrl} key={'item' + key} info={each.info} stock={each.stock} />)
            }
        </>

    )
}

export default ItemList