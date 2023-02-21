import React from "react";
import LogoFiltro from '../Imagenes/LogoFiltro.png'
import Typography from '@mui/material/Typography';

export const ImgComponent = (props) => {

  return (
    <div style={{textAlign: 'center'}}>
      <img src={props.src ? props.src :  LogoFiltro} alt={props.alt ? props.alt : 'Maquinaria y Equipos'} style={props.style ? props.style : {height: 65, width: 65}}/>
      {props.text ?
        <Typography sx={{ fontSize: 12, padding: '1%', paddingBottom: '4%' }} color="text.secondary" gutterBottom align="center">
          { props.text }
        </Typography>
      : ''}
    </div>
  )
   
}




