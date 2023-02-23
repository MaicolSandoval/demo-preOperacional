import React from "react";
// import Webcam from "react-webcam";
import { QrReader } from "react-qr-reader";


export const QRcamara = () => {

    return(
        // <Webcam/>
        <QrReader
         facingMode= 'user'
        />
    )
}

