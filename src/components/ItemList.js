import Item from "./Item"
import { useEffect, useState } from "react";
import { getProductos } from "../app/api";

const ItemList = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getProductos().then((data) => {
            setItem(data)
        });
    }, []);

    return (
        <>
            {
                item.map((each, key) => <Item id={each.id} title={each.title} price={each.price} pictureUrl={each.pictureUrl} key={'item' + key} />)
            }
        </>

    )
}

export default ItemList