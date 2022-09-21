import Item from "./Item"
import { useEffect, useState } from "react";
import { getProductos } from "../app/api";
import { useParams } from "react-router-dom";

const ItemList = () => {
    const [item, setItem] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {

        if (idCategoria) {
            getProductos().then((data) => {
                setItem(data.filter(each => each.categoria === idCategoria));
            });
        } else {
            getProductos().then((data) => {
                setItem(data)
            });
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