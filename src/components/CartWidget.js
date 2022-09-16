import cartIcon from "../assets/shopping-cart.png"

const CartWidget = () => {
    return (
        <button className="nav__btn">
            <img src={cartIcon} alt="Logo widget" />
        </button>

    )
}

export default CartWidget