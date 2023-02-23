import Webcam from "react-webcam";
import {QrReader} from 'react-qr-reader'
alert("cambio")

export const WebCam = () => {
    return(
        // <Webcam />
        <QrReader 
            delay={300}
            constraints={{
                facingMode: 'user'
            }}
            style={{ width: '100%' }}
            legacyMode={false}
            
        />
        
    )
}