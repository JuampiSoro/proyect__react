import React from "react";
import { useCartContext } from "../components/CartProvider"
import { CartWithoutProducts } from "../components/CartWithoutProducts";
import ItemCart from "../components/ItemCart";

const Cart = () => {
    const { cart, clearCart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <CartWithoutProducts />
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart product={product} key={product.id} />)
            }

            <p>Precio total: {totalPrice()} </p>
            <button onClick={() => clearCart()}>Eliminar todos los productos</button>
        </>
    )


}

export default Cart