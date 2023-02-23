
import { Routes, Route } from "react-router-dom";
import { CardConsulta } from "./CardConsulta";
import { PrimerComponente } from "./PrimerComponente";
import { QRcamara } from "./QrCamara";


export const Rutas = () => {
    return(
        <>
            <Routes>
                <Route element={<PrimerComponente/>} path='/Sinco/V3/Maquinaria/index'></Route>
                <Route element={<CardConsulta/>} path='/CardComponent'></Route>
                <Route element={<QRcamara/>} path='/QRCamara'></Route>
            </Routes>
        </>
    )
}