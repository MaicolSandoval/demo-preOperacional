import React from "react";
import { Card, CardContent, Stack, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Encabezado } from "../Encabezado";

export const MenuQR = () => {
    const navigation = useNavigate();

    const ValidacionEjemplo = () => {
        return(
            navigation('/PruebaQr')
        )
    }
 
    const GenQR = () => {
        return(
            navigation('/GenerarQR')
        )
    }
 
    const EscanearQR= () => {
        return(
            navigation('/EscanearQR')
        )
    }

    const ImportarQR = () => {
        return(
           alert('Opción en desarrollo')
        )
    }

    return (
        <>
            <Card elevation = {0}>
                <Encabezado texto="Opciones QR"/> 
                <CardContent>
                    <Stack spacing={2}>
                        <Button variant="contained" disableElevation className="botonIngresar" onClick={ValidacionEjemplo}>
                            <Typography>Demo</Typography> 
                        </Button>
                        <Button variant="contained" disableElevation className="botonIngresar" onClick={EscanearQR}>
                            <Typography>Escanear</Typography> 
                        </Button>
                        <Button variant="contained" disableElevation className="botonIngresar" onClick={GenQR}>
                            <Typography>Generar</Typography> 
                        </Button>
                        <Button variant="contained" disableElevation className="botonIngresar" onClick={ImportarQR}>
                            <Typography>Importar</Typography> 
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )

}