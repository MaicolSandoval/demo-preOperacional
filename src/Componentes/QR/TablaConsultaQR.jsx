import React from "react";
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, AppBar, Toolbar, Typography} from '@mui/material';
import { Encabezado } from "../../Componentes/Encabezado";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router"

export const TablaConsultaQR = (props) => {
    const navigation = useNavigate();
    const NuevaConsulta = () => {
        navigation('/EscanearQR')
    }

    return(

        <>
            <Card style={{padding:'15px'}}>
                <Encabezado/>
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

                    <TableRow key={props.data} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">{props.data[0]}</TableCell>
                    </TableRow>
                    <TableRow key={props.data} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left">Equipo</TableCell>
                        <TableCell align="left">{props.data[1]}</TableCell>
                    </TableRow>
                    <TableRow key={props.data} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left">Marca</TableCell>
                        <TableCell align="left">{props.data[2]}</TableCell>
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

                <Button  onClick={ NuevaConsulta } id="CrearQr" type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1}}>Nueva consulta</Button>
            </Card>

            {/* <Card style={{textAlign: 'left', padding: '15px'}}>
                <h5 style={{textAlign: 'center'}}>Información del equipo</h5>
                <Typography>Id: {scanResultWebCam[0]}</Typography>
                <Typography>Equipo: {scanResultWebCam[1]}</Typography>
                <Typography>Marca: {scanResultWebCam[2]}</Typography>
                <br/>
                <a  style={{textAlign: 'center'}} href={scanResultWebCam}>link</a>
            </Card> */}
        </>

    )
}