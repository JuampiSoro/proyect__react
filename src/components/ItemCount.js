import { useState } from "react"



const ItemCount = ({ inicio, stock, onAdd }) => {
    const [v, setValor] = useState(inicio);

    return (
        <div>
            <button className="btn__count" onClick={() => {
                v === 1 ? console.log("No podes sacar más productos") : setValor(v - 1);
            }}>-</button>
            {v}
            <button className="btn__count" onClick={() => {
                v < stock ? setValor(v + 1) : console.log("No hay mas stock!");
            }}>+</button>
            <button className="btn__count" onClick={() => onAdd(v)}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount