import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "./CartProvider";


const ItemDetail = ({ data, detalle }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = quantity => {
        setGoToCart(true);
        addProduct(data, quantity)
    }

    return (
        <div className="item__detail__container">
            <img src={data.pictureUrl} alt={data.title} className="item__detail__img" />
            <div className="item__detail__right">
                <div className="item__detail__container__info">
                    <h4>{detalle}</h4>
                    <h5 className="item__detail__title">{data.title}</h5>
                    <p className="item__detail__p">{data.info}</p>
                </div>
                {
                    goToCart ? <Link to="/cart/">Terminá tu compra</Link> : <ItemCount inicio={1} stock={data.stock} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail