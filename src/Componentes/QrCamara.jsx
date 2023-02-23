// import React from "react";
// // import Webcam from "react-webcam";
// import { QrReader } from "react-qr-reader";


// export const QRcamara = () => {
//     return(
//         // <Webcam/>
//         <QrReader

//          facingMode= { {exact: "environment"} }

//         />
//     )
// }

import React, { Component } from 'react'
import { QrReader } from 'react-qr-reader'

// import QrReader from 'react-qr-scanner'
 
class Test extends Component {
  state = {
  result: '',
  facingMode : 'user',
  legacyMode: false,

  }

  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    this.setState(
      {legacyMode: true}
    )
  }

choiceButton= () =>{
        if(this.state.facingMode === "environment"){
            this.setState({
                facingMode: "user"
            })
        } else {
            this.setState({
                facingMode: "environment"
            })
        }
      }
openImageDialog() { this.ref.qrReader1.openImageDialog()  }


  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
      </div>
    )
  }
}

export default Test