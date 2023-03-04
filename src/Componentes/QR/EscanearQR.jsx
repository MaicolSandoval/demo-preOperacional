import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, AppBar, Toolbar, Typography} from '@mui/material';
import QRCode from 'qrcode';
import {QrReader} from 'react-qr-reader';
import { Encabezado } from "../../Componentes/Encabezado";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  const NuevoCodigo = () => {
    return(
      setScanResultWebCam('')
    )
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
                delay={400}
                style={{width: '100%'}}
                containerStyle={{height: '100%'}}
                videoContainerStyle={{height: '100%',paddingTop: '75%'}}
                videoStyle={{width: '100%', height: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
                onResult={(result, error) => {
                  if (!!result) {
                    const dataJson = JSON.parse(result?.text);
                    console.log(dataJson)
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
                  <Card style={{padding:'15px'}}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableHead style={{background:'#003972'}}>
                            <TableRow rowSpan>
                              <TableCell colSpan={2} style={{textAlign: 'center', color:'white'}}>
                                <h6>Información del equipo</h6>
                                </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>

                          <TableRow key={scanResultWebCam} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">{scanResultWebCam[0]}</TableCell>
                          </TableRow>
                          <TableRow key={scanResultWebCam} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">Equipo</TableCell>
                                <TableCell align="left">{scanResultWebCam[1]}</TableCell>
                          </TableRow>
                          <TableRow key={scanResultWebCam} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">Marca</TableCell>
                                <TableCell align="left">{scanResultWebCam[2]}</TableCell>
                          </TableRow>


                            {/* {scanResultWebCam.map((scanResultWebCam) => (
                              <TableRow key={scanResultWebCam} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">{scanResultWebCam}</TableCell>
                              </TableRow>
                            ))} */}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Button onClick={NuevoCodigo} id="CrearQr" type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1}}>Nueva consulta</Button>
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


