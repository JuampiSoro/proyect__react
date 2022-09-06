import ItemCount from './ItemCount'

const ItemListContainer = ({ contenido }) => {



    return (
        <main className="products__container">
            <h1>{contenido}</h1>
            <ItemCount inicio={1} stock={10} />
        </main>
    )
}

export default ItemListContainer