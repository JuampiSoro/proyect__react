import { useCartContext } from "./CartProvider"

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div>
            <h1>{product.title}</h1>
            <h2>{product.quantity}</h2>
            <button onClick={() => removeProduct(product.id)}>Eliminar producto</button>
        </div>
    )
}

export default ItemCart