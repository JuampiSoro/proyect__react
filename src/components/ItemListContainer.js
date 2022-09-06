import ItemCount from './ItemCount'

const ItemListContainer = ({ contenido }) => {
    return (

        <main className="products__container">
            <h1>{contenido}</h1>
            <ItemCount inicio={1} stock={10} onAdd={contador => {
                alert(`Agregaste ${contador} productos`);
            }} />
        </main>
    )
}

export default ItemListContainer