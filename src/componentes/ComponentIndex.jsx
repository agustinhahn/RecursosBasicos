import React from 'react'
import { Link, useHref } from 'react-router-dom'

const ComponentIndex = () => {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <h1 className='tituloH1'>
                    RECURSOS
                </h1>
                <h4>
                    INGRESAR AQUI PARA PROBAR CODIGOS
                </h4>
                <a href="https://stackblitz.com/edit/stackblitz-starters-xm9szr?description=A%20create-react-app%20project%20based%20on%20react%20and%20react-dom&file=src%2FApp.js&title=React%20Starter" class="boton" target="_blank">pagina pruebas</a>
                <Link to={('/Recursos-css')}>
                    <div className="containerEnlace">
                        <button className="btn_enlace">CSS</button>
                    </div>
                </Link>
                <Link to={('/Recursos-js')}>
                    <div className="containerEnlace">
                        <button className="btn_enlace">JS</button>
                    </div>
                </Link>
                <Link to={('/Recursos-adicionales')}>
                    <div className="containerEnlace">
                        <button className="btn_enlace">ADICIONALES</button>
                    </div>
                </Link>
                <Link to={('/Recursos-dependencias')}>
                    <div className="containerEnlace">
                        <button className="btn_enlace">DEPENDENCIAS</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ComponentIndex