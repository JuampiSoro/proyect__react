import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl, info }) => {
    return (
        <div className="item__container" id={id}>

            <img src={pictureUrl} alt={title} />
            <h2 className="item__title">{title}</h2>
            {/* <p className="item__detail"><Link to={`/producto/${id}`} style={{ color: 'black' }}>Ver detalle del producto</Link></p> */}

            <div className="item__price__btn__container">
                <p className="item__price">{price}<span>$</span></p>
                <Link to={`/producto/${id}`}><button className="item__btn">Detalle del producto</button></Link>
            </div>
        </div>
    )
}

export default Item