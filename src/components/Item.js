const Item = ({ id, title, price, pictureUrl, info }) => {
    return (
        <div className="item__container" id={id}>
            <img src={pictureUrl} alt={title} />
            <h2 className="item__title">{title}</h2>
            <p className="item__detail" onClick={() => console.log("Aca iria el detail")}>Ver detalle del producto</p>

            <div className="item__price__btn__container">
                <p className="item__price">{price}<span>$</span></p>
                <button className="item__btn">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item