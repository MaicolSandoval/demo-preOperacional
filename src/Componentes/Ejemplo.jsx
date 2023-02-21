import React from "react";
import { Link } from "react-router-dom";


export const EjemploRutes = () => {
    return(
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="btn btn-outline-primary" to='/'>Inicio</Link>
                <Link className="btn btn-outline-primary" to='/CardComponent'>Nosotros</Link>
            </div>
        </div>
    )
}