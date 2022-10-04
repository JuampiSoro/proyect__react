import React from "react";
import { useCartContext } from "../components/CartProvider"
import { CartWithoutProducts } from "../components/CartWithoutProducts";
import ItemCart from "../components/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, clearCart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "Juan Pablo",
            email: "sorojuanpablo@gmail.com",
            address: "Avenida Cabildo 1398"
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }

    const postClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => console.log(`El ID generado es: ${id}`));
    }

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
            <button onClick={postClick}>Generar orden</button>
        </>
    )


}

export default Cart