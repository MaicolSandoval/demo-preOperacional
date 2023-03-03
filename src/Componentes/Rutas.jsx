
import { Routes, Route } from "react-router-dom";
import { CardConsulta } from "./CardConsulta";
import { PrimerComponente } from "./PrimerComponente";
import { PruebaQr } from "./PruebaQr"
import { GenerarQR } from "./QR/GenerarQR"
import { EscanearQR } from "./QR/EscanearQR";
import { MenuQR } from "./QR/MenuQR"


export const Rutas = () => {
    return(
        <>
            <Routes>
                <Route element={<PrimerComponente/>} path='/Sinco/V3/Maquinaria/index'></Route>
                <Route element={<CardConsulta/>} path='/CardComponent'></Route>
                <Route element={<PruebaQr/>} path='/PruebaQr'></Route>
                <Route element={<EscanearQR/>} path='/EscanearQR'></Route>
                <Route element={<GenerarQR/>} path='/GenerarQR'></Route>
                <Route element={<MenuQR/>} path='/MenuQR'></Route>
            </Routes>
        </>
    )
}