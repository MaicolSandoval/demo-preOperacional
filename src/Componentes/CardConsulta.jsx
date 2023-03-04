import React from "react";
import "../Componentes/styles.css";
import seleccion from '../Imagenes/seleccionEquipo.png'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ImgComponent } from "./ImgComponent";
import { Encabezado } from "./Encabezado";



export const CardConsulta = () => {
    return (
        <>
            <Encabezado encabezado = 'secundario' mostrarinfo = {true} calendario={true} fecha={true} menu={true} usuario={'Michael'}/>
            <div className="contenedorCardConsulta">
                <div className="contenedorInputConsulta">
                    <Stack>
                        <TextField id="outlined-basic" label="Buscar Equipo" variant="outlined" size="small"/>
                    </Stack>
                </div>
                <ImgComponent src={seleccion} style={{width: '50%', height: '50%', margin: 'auto', marginTop: '15%'}} text='¡Elige un equipo para comenzar!' />
            </div>'
        </>
    )
}
