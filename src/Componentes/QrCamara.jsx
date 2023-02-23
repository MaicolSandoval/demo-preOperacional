import React from "react";
// import Webcam from "react-webcam";
import { QrReader } from "react-qr-reader";


export const QRcamara = () => {
    return(
        // <Webcam/>

        <QrReader
        key="environment"
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
            // stuff...
        }}
        />

        // <QrReader

        //  facingMode= { {exact: "environment"} }

        // />
    )
}

