import React from "react";
import { QrReader } from "react-qr-reader";


export const CamaraQR = ()=>{
    return(
        <div>
            <QrReader
            delay={ 300 }
            style={ {width: '100%'} }
            // onError={ handleQRError }
            // onResult={ handleScan }
            constraints={ {facingMode: 'environment'} }
            />
        </div>
    )
}