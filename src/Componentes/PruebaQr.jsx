import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, AppBar, Toolbar, Typography} from '@mui/material';
import QRCode from 'qrcode';
import {QrReader} from 'react-qr-reader';

export const PruebaQr = () => { 

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
    <Container>
      <AppBar className='appBar' position="static">
        <Toolbar>
          <Typography fontSize={14} noWrap component="div" align='center' paddingLeft={2} sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
            Escanera QR
          </Typography>
        </Toolbar>
      </AppBar>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
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
                    var data = result.text
                    var texto = 'https://'
                    var texto2 = 'http://'

                    if(data.includes(texto) || data.includes(texto2)){
                      console.log(result.text)
                      setScanResultWebCam(result?.text);
                      setLink(true)

                    }else{
                      const dataJson = JSON.parse(result.text);
                      const data = dataJson.documento[0];
                      const array = Object.values(data);
                      setScanResultWebCam(array);
                      setLink(false)
                    }
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={{textAlign: 'center'}}>
              <h2>Crear QR</h2>
              <TextField label="Escriba" onChange={(e) => setText(e.target.value)}  size="small"/>
              <Button  variant="contained" color="primary" onClick={ () => generateQrCode() }>Generar</Button>
              <br/>
              <br/>
              <br/>
              {imageUrl ? (
                <a href={imageUrl} download>
                    <img src={imageUrl} alt="img"/>
                </a>) : null
              } 
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              {/* <Button  variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
              <QrReader
                ref={qrRef}
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
              />
              <h3>Scanned Code: {scanResultFile}</h3> */}
            </Grid>
              
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

// const useStyles = makeStyles((theme) => ({
//     conatiner: {
//       marginTop: 10
//     },
//     title: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems:  'center',
//       background: '#3f51b5',
//       color: '#fff',
//       padding: 20
//     },
//     btn : {
//       marginTop: 10,
//       marginBottom: 20
//     }
// }));
