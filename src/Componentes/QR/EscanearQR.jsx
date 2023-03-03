import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, AppBar, Toolbar, Typography} from '@mui/material';
import QRCode from 'qrcode';
import {QrReader} from 'react-qr-reader';
import { Encabezado } from "../../Componentes/Encabezado";

export const EscanearQR = () => { 

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const [link, setLink] = useState(false)
//   const classes = useStyles();
  const qrRef = useRef(null);


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }

  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
      if (result) {
          setScanResultFile(result);
      }
  }
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setScanResultWebCam(result);
    }
  }
  return (
    <Container style={{padding: '0px'}}>
      <Encabezado texto="Escanear QR"/> 
        <CardContent style={{padding: '0px'}}>
        <Card>
          <Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{textAlign:"center"}}>
              <QrReader
                key="environment"
                constraints={{ facingMode: 'environment' }}
                delay={300}
                //style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
                onResult={(result, error) => {
                  if (!!result) {
                    const dataJson = JSON.parse(result.text);
                    const data = Object.values(dataJson);
                    console.log(data)
                    setScanResultWebCam(data);
                  }
        
                  if (!!error && result) {
                    console.info(error);
                  }
                }}
              />
                { scanResultWebCam &&
                  <>
                    <Card style={{textAlign: 'left', padding: '15px'}}>
                      <h5 style={{textAlign: 'center'}}>Información del equipo</h5>
                      <Typography>Id: {scanResultWebCam[0]}</Typography>
                      <Typography>Equipo: {scanResultWebCam[1]}</Typography>
                      <Typography>Marca: {scanResultWebCam[2]}</Typography>
                      <br/>
                      <a  style={{textAlign: 'center'}} href={scanResultWebCam}>link</a>
                    </Card>
                  </>
                }
                
              
            </Grid> 
          </Grid>
          </Card>
        </CardContent>
    </Container>
  );
}


