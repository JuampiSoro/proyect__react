import React from "react";
import { useState } from "react";
import { useCartContext } from "../components/CartProvider"
import { CartWithoutProducts } from "../components/CartWithoutProducts";
import ItemCart from "../components/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, clearCart, totalPrice } = useCartContext();

    const [buy, setBuy] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    });

    const inputs = (e) => {
        setBuy({ ...buy, [e.target.name]: e.target.value })
    }

    const postClick = (e) => {
        e.preventDefault();

        if (!buy.name || !buy.email || !buy.phone || !buy.address) {
            alert("Debe completar todos los campos requeridos")
        } else {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, buy).then(({ id }) => console.log(`El ID generado es: ${id}`));

            setBuy({ name: "", email: "", email2: "", phone: "", address: "", });

            clearCart();

        }


    }

    if (cart.length === 0) {
        return (
            <div className="cart__container">
                <CartWithoutProducts />
            </div>
        );
    }

    return (
        <>
            <div className="cart__container">
                {
                    cart.map(product => <ItemCart product={product} key={product.id} />)
                }
                <div className="cart__static">
                    <p className="cart__price">Precio total: {totalPrice()} </p>
                    <div className="cart__btn__container">
                        <button className="cart__btn" onClick={() => clearCart()}>Eliminar todos los productos</button>
                    </div>
                </div>
                <form>
                    <div className='form__container'>

                        <h2 className='form__subtitle'>Formulario de Compra</h2>
                        <div className="form__container__info">
                            <div className="form__container__left">
                                <label className='form__label'>Nombre y Apellido:</label>
                                <input className='form__input' type="text" name="name" placeholder="Ingrese su nombre..." onChange={inputs} value={buy.name}
                                />

                                <label className='form__label'>Email:</label>
                                <input className='form__input' type="email" name="email" placeholder="Ingrese su email..." onChange={inputs} value={buy.email}
                                />
                            </div>
                            <div className="form__container__left">
                                <label className='form__label'>Número de Telefono:</label>
                                <input className='form__input' type="number" name="phone" placeholder="Ingrese su número de telefono..." onChange={inputs} value={buy.phone}
                                />

                                <label className='form__label'>Dirección:</label>
                                <input className='form__input' type="text" name="address" placeholder="Ingrese su dirección..." onChange={inputs} value={buy.address} />
                            </div>

                        </div>

                        <button className="form__btn" onClick={postClick} type="submit">Generar orden</button>
                    </div>
                </form>
            </div>
        </>
    )


}

export default Cart