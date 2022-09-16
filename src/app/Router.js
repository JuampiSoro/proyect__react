import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contacto from "../pages/Contacto"
import DetailPage from "../pages/DetailPage"
import Home from "../pages/Home"
import Layout from "./Layout"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/contacto/" element={<Contacto />} />
                    <Route path="*" element={<div> Error 404 </div>} />

                    <Route path="/producto/:id" element={<DetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router