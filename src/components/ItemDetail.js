const ItemDetail = ({ detalle, title, info, pictureUrl }) => {


    return (
        <div className="item__detail__container">
            <img src={pictureUrl} alt={title} className="item__detail__img" />
            <div className="item__detail__container__info">
                <h4>{detalle}</h4>
                <h5 className="item__detail__title">{title}</h5>
                <p className="item__detail__p">{info}</p>
            </div>
        </div>
    )
}

export default ItemDetail