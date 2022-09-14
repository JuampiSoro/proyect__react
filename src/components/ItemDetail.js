const ItemDetail = ({ detalle, title, info, pictureUrl }) => {


    return (
        <div className="item__detail__container">
            <h4>{detalle}</h4>
            <h5>{title}</h5>
            <img src={pictureUrl} alt={title} className="item__detail__img" />
            <p>{info}</p>

        </div>
    )
}

export default ItemDetail