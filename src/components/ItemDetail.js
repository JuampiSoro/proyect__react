import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";


const ItemDetail = ({ detalle, title, info, pictureUrl, stock }) => {
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = quantity => setGoToCart(true);

    return (
        <div className="item__detail__container">
            <img src={pictureUrl} alt={title} className="item__detail__img" />
            <div className="item__detail__container__info">
                <h4>{detalle}</h4>
                <h5 className="item__detail__title">{title}</h5>
                <p className="item__detail__p">{info}</p>
            </div>
            {
                goToCart ? <Link to="/cart/">Terminá tu compra</Link> : <ItemCount inicio={1} stock={stock} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail