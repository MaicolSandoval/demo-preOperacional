import React from "react";
import { QrReader } from "react-qr-reader";

const result = ()=>{
    alert("pruebas")
}

export const QRCamara = () => {
    return(
        <QrReader
        onResult={result}
            legacyMode
        />
    )
}