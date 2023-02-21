import React from "react";
import "../Componentes/styles.css";
import { Encabezado } from "./Encabezado";
import  CardComponent from "./CardComponent";
import { Grid } from "@mui/material";

export const PrimerComponente = () => {
  return (
    <>
      <Grid>
        <Grid item xs={6} sm={6} md={6} >
          <Encabezado encabezado = 'inicial'/>
          <CardComponent/>
        </Grid>
      </Grid>
    </>
  )
}
