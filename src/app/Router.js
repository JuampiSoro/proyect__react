import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartProvider from "../components/CartProvider"
import Cart from "../pages/Cart"
import Categoria from "../pages/Categoria"
import Contacto from "../pages/Contacto"
import DetailPage from "../pages/DetailPage"
import Home from "../pages/Home"
import Layout from "./Layout"

const Router = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/contacto/" element={<Contacto />} />
                        <Route path="/cart/" element={<Cart />} />
                        <Route path="/categoria/:idCategoria" element={<Categoria />} />
                        <Route path="*" element={<div> Error 404 </div>} />

                        <Route path="/producto/:id" element={<DetailPage />} />
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default Router