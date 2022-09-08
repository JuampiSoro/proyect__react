import ItemCount from './ItemCount'
import ItemList from './ItemList';

const ItemListContainer = ({ contenido }) => {
    return (

        <main className="products__container">
            {/* <h1>{contenido}</h1>
            <ItemCount inicio={1} stock={10} onAdd={contador => {
                alert(`Agregaste ${contador} productos`);
            }} /> */}
            <ItemList />
        </main>
    )
}

export default ItemListContainer