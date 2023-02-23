import React from "react";
// import Webcam from "react-webcam";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import { Button, TextField } from "@mui/material";


export const QRcamara = () => {

    //const [valor , setValor] = useState('')

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    // const handleErrorWebCam = (error) => {
    //     console.log(error);
    // }                                

    // const handleScanWebCam = (result) => {
    //     if (result){
    //         setValor(result);
    //     }
    // }

    return(
       
       <>
            <QrReader
            key="environment"
            constraints={{ facingMode: 'environment' }}

            delay={300}
            style={{width: '100%'}}
            onError={handleError}
            onScan={handleScan}

            onResult={(result, error) => {
                // stuff...
            }}
            />
            <Button onClick={handleScan}>Scanner</Button>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue={qrscan}
                value={qrscan}
            />

            {/* <h3>Scanned By WebCam Code: {qrscan}</h3> */}
        </>
       
    )
}

