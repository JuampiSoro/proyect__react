import React, { useState, useContext } from "react";
const CartContext = React.createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(product => product.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity });
        setCart(newCart);
    }

    console.log("EN EL CARRITO:", cart)

    const clearCart = () => setCart([]);

    const totalPrice = () => cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

    const isInCart = id => cart.find(product => product.id === id) ? true : false;

    const removeProduct = id => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            cart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);
export default CartProvider