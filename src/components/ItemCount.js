import { useState } from "react"

const ItemCount = ({ inicio, stock, onAdd }) => {
    const [v, setValor] = useState(inicio);

    return (
        <div>
            <button onClick={() => {
                v === 1 ? console.log("No podes sacar más productos") : setValor(v - 1);
            }}>-</button>
            {v}
            <button onClick={() => {
                v < stock ? setValor(v + 1) : console.log("No hay mas stock!");
            }}>+</button>
            <button onClick={() => onAdd(v)}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount