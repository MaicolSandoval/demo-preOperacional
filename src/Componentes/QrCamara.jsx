import React from "react";
// import Webcam from "react-webcam";
import { QrReader } from "react-qr-reader";
import { useState } from "react";



export const QRcamara = () => {

    const [valor , setValor] = useState('')

    const handleErrorWebCam = (error) => {
        console.log(error);
    }                                

    const handleScanWebCam = (result) => {
        if (result){
            setValor(result);
        }
    }

    return(
       
       <>
            <QrReader
            key="environment"
            constraints={{ facingMode: 'environment' }}

            delay={300}
            style={{width: '100%'}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}

            onResult={(result, error) => {
                // stuff...
            }}
            />

            <h3>Scanned By WebCam Code: {valor}</h3>
        </>
       
    )
}

