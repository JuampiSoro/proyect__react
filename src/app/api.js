import productos from "../assets/productos"

export const getProductos = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })

    return task
};

export const getItem = (id) => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[id])
        }, 2000)
    })

    return task
};