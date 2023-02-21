
import { Routes, Route } from "react-router-dom";
import { CardConsulta } from "./CardConsulta";
import { PrimerComponente } from "./PrimerComponente";
import { WebCam } from "./WebCam";

export const Rutas = () => {
    return(
        <>
            <Routes>
                <Route element={<PrimerComponente/>} path='/Sinco/V3/Maquinaria/index'></Route>
                <Route element={<CardConsulta/>} path='/CardComponent'></Route>
                <Route element={<WebCam/>} path='/WebCam'></Route>
            </Routes>
        </>
    )
}