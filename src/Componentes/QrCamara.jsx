import React from "react";
import Webcam from "react-webcam";
import QrReader from "react-qr-scanner";

// export const QRcamara = () => {

//     return(
//         <Webcam/>
//         <QrReader/>
//     )
// }

export const QRcamara = () => {
    
    const handleScan = (data) => {
    this.setState({
        result: data,
    })
    }
    const handleError = (err) => {
    console.error(err)
    }
   
   
    return(
        <div>
            <QrReader
                onError={handleError}
                onScan={handleScan}
            />
        </div>
    )
    
  }