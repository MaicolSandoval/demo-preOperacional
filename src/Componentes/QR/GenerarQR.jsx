import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, Grid, TextField, Button, Autocomplete} from '@mui/material';
//import QRCode from 'qrcode';
import iconoEmpresa from '../../Imagenes/iconoEmpresa.png'
import { QRCode } from 'react-qrcode-logo';
import { Encabezado } from "../Encabezado";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];

export const GenerarQR = () => { 
    const [id, setId] = useState('')
    const [equipo, setEquipo] = useState('')
    const [marca, setMarca] = useState('')
    const [texto, seTexto] = useState('')
    const [estado, setEstado] = useState(false)

    const estilosContenidoCard ={
        padding: '19%',
        paddingLeft: '11%',
        paddingRight: '11%'
    }
      

    const onInput =({target}) =>{
        if (target.name==='id')        setId(target.value)      
        if (target.name==='equipo')     setEquipo(target.value)      
        if (target.name==='marca')     setMarca(target.value)   
    }

    const CrearQr = (event) =>{
        event.preventDefault();
        if(equipo != '' &&  id!= '' &&  marca != ''){
            seTexto(JSON.stringify({ id ,equipo , marca}))
            setEstado(true)
        }
        setEquipo('')
    }

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${texto}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

  return (
    <>
        <Container component="main" maxWidth="xs" style={{padding: '0px'}}>
            <Encabezado texto="Generar QR"/> 
            <Card id="CardContent"  elevation={0}>
                <CardContent sx={{width:'100%'}} elevation={0}  style={estilosContenidoCard}>
                    { estado  && 
                        <>
                            <div style={{textAlign: 'center'}}>
                                <QRCode 
                                    id="qr-gen"
                                    logoImage={iconoEmpresa}
                                    value={texto}
                                    ecLevel='Q' 
                                    quietZone='10'                            
                                    logoHeight='25'
                                    logoOpacity='1'
                                    removeQrCodeBehindLogo='true'
                                    logoPadding='2'
                                    logoPaddingStyle='square' 
                                    eyeColor='#1B344C'
                                />
                                <p>
                                    <Button type="button" onClick={downloadQRCode}>Descargar código QR</Button>
                                </p> 
                            </div>                       
                        </>                                                                           
                    }
                    <h7 style={{textAlign: 'center'}}>Datos para generar QR</h7>
                    <TextField className='text' margin="dense" required fullWidth name="id" size="small" label="Id" value={id}  onChange={ onInput } id="id" autoComplete="id" autoFocus />
                    <TextField className='text' margin="dense" required fullWidth name="equipo" size="small" label="Equipo" value={equipo}  onChange={ onInput } id="equipo" autoComplete="equipo"/>
                    <TextField className='text' margin="dense" required fullWidth name="marca" size="small" label="Marca" value={marca}  onChange={ onInput }  id="marca" autoComplete="marca"/>
                    {/* <Autocomplete   disablePortal margin="normal" id="combo-box-Sucursal"  options={top100Films} sx={{ width: 320, marginTop: 1 }} renderInput={(params) => <TextField {...params} label="Sucursal" />}    />      */}
                    <Button  onClick={ CrearQr } id="CrearQr" type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1}}>Crear Qr</Button>
                </CardContent>
            </Card>
        </Container>
    </>
   
  )
}

