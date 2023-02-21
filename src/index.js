import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Rutas } from './Componentes/Rutas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.Fragment>
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.Fragment>


  // <React.Fragment>
  //   <BrowserRouter>
  //     <PrimerComponente/>
  //   </BrowserRouter>
  // </React.Fragment>
);


