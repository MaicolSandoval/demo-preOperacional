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
      <Card>
        <CardContent style={{padding: '0px'}}>
          <Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{textAlign:"center"}}>
              <QrReader
                key="environment"
                constraints={{ facingMode: 'environment' }}
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
                onResult={(result, error) => {
                  if (!!result) {

                    setScanResultWebCam(result?.text);
                    const dataJson = JSON.parse(result.text);
                    const data = Object.values(dataJson);
                    console.log(data)

         
                
                    // var data = result.text
                    // var texto = 'https://'
                    // var texto2 = 'http://'

                    // if(data.includes(texto) || data.includes(texto2)){
                    //   console.log(result.text)
                    //   setScanResultWebCam(result?.text);
                    //   setLink(true)

                    // }else{
                    //   const dataJson = JSON.parse(result.text);
                    //   const data = dataJson.documento[0];
                    //   const array = Object.values(data);
                    //   setScanResultWebCam(array);
                    //   setLink(false)
                    // }
                  }
        
                  if (!!error && result) {
                    console.info(error);
                  }
                }}
              /> 
              <TextField
                fullWidth 
                id="outlined-multiline-static"
                label="Resultados de escaner"
                multiline
                rows={4}
                value={scanResultWebCam}
                top={10}
              />
              {
                link && <a  href={scanResultWebCam}>link</a>
              }
            </Grid> 
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}


