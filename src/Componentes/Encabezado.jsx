import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoopIcon from '@mui/icons-material/Loop';
import * as React from 'react';

export const Encabezado = (props) => {

    var actDate = new Date();
    var fecha = actDate.toLocaleDateString();

    if(props.encabezado == 'inicial') { 
        return(
            <div className="encabezado"></div>
        )
    }

    return(
        <div className={props.encabezado == 'secundario' ? "encabezado2" : ""  }>
            <Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar className='appBar' position="static">
                            <Toolbar>
                                {props.texto ? 
                                    <Typography fontSize={14} noWrap component="div" align='center' paddingLeft={2} sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
                                     {props.texto}
                                    </Typography> : ''
                                }
                                { props.calendario ? <EventIcon fontSize='large'/> : ''}
                                { props.volver ? <Button style={{color: 'white'}}><ArrowBackIosIcon/>Volver</Button>  : ''}
                                { props.fecha ? 
                                    <Typography fontSize={14} noWrap component="div" align='left' paddingLeft={2} sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
                                        {fecha}
                                    </Typography> : ''
                                }
                                { props.menu ? <MenuIcon fontSize='large'/> : ''}
                                { props.cambiarEquipo ? <LoopIcon/> : ''}
                                { props.cambiarEquipo ? <Typography>Cambiar equipo</Typography> : ''}
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Grid>
            </Grid>
            {props.texto == "datosEncabezado" ? 
                <div className='textoEncabezado'>
                    <h2>Hola { props.usuario }</h2>
                    <p>¿Con qué equipo vas a trabajar hoy?</p>
                </div>
            : ""}
        </div>
    )

}