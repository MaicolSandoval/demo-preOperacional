import * as React from "react";
import "../Componentes/styles.css";
import sinco from '../Imagenes/Sinco-ERP.png'

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button, Checkbox, Typography } from "@mui/material";

import { ImgComponent } from "./ImgComponent";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router";



import { useAxios } from "../hooks/useAxios";
import { useEffect } from "react";
import { Box } from "@mui/system";


const estilosCard ={
  borderTopRightRadius: '3%',
  borderTopLeftRadius: '3%',  
  position: "absolute",
  top: '30%',
  width: '100%'
}

const estilosContenidoCard ={
  padding: '19%',
  paddingLeft: '11%',
  paddingRight: '11%'
}

export default function CardComponent(){
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword, setShowPassword] = React.useState(false);
    const [usuario, setUsuario] = React.useState('Admin');
    const [contrasena, setContrasena] = React.useState('Admin123');
    var preToken = 0;
    //const [preToken = null, setPreToken] = useState();
    //const [empresa, setEmpresa] = useState(null);

    const navigation = useNavigate();
    const ValidacionLogin = () => {
        if(usuario != '' && contrasena.length > 4){
            return(
                navigation('/CardComponent')
            )
        }
    }

    const ValidacionEjemplo = () => {
        return(
            navigation('/CamaraQR')
        )
        

        // if(window.innerWidth <= 768){
        //    alert('Es movil')
        // }else{
        //     alert('Es pc')
        // }
    }

    // useEffect(()=>{
    //     preToken = 1
    //     alert('funciona el efect')
    // },[contrasena])

    // useEffect(() => {
    //     if (preToken) {
    //       console.log(preToken);
    //       const params3 = {
    //         authorization: "Bearer " + preToken,
    //         url: "API/Cliente/1/Empresas",
    //         noModule: true,
    //       };
    
    //       console.log(params3)
    //       let callingAPI = useAxios(params3);

    //       callingAPI().then((result2) => {
    //         console.log(result2)
    //         // //empresas
    //         // if (result2.data.length > 0) {
    //         //   setEmpresa(result2.data);
    //         // } else {
    //         //   console.log("El usuario no tiene empresas asignadas");
    //         //   setloading(false);
    //         // }
    //       });
    //     }
    // });

    return (
        <>
            <Card style={estilosCard} elevation = {0}>
                <CardContent style={estilosContenidoCard}>
                    <ImgComponent text='Maquinaria y Equipos'/>
                    <Stack spacing={2}>
                        <TextField id="outlined-basic" label="Usuario" variant="outlined" size="small" value={usuario} onChange={ev => setUsuario(ev.target.value)}/>
                        <FormControl size="small" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'} value={contrasena}
                                onChange={ev => setContrasena(ev.target.value)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Recuérdame" />
                        </FormGroup>
                        <Button variant="contained" disableElevation className="botonIngresar" onClick={ValidacionLogin}>
                            <Typography>Ingresar</Typography> 
                        </Button>
                        <Button variant="contained" disableElevation className="botonIngresar" onClick={ValidacionEjemplo}>
                            <Typography>Ejemplo</Typography> 
                        </Button>
                    </Stack>
                    <ImgComponent src={sinco} style={{width: 130, height: 70, margin: 'auto', marginTop: '5%'}} />
                </CardContent>
            </Card>
        </>
    )
}
