import { useCartContext } from "./CartProvider"

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="item__cart__container">
            <div className="item__cart__left">
                <img className="item__cart__img" src={product.pictureUrl} alt={product.title} />
                <h1>{product.title}</h1>
            </div>
            <div className="item__cart__right">
                <h2>Cantidad: {product.quantity}</h2>
                <button className="item__cart__btn" onClick={() => removeProduct(product.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}

export default ItemCart