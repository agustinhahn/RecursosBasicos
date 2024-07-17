import React from 'react'
import { Link, useHref } from 'react-router-dom'

const ComponentIndex = () => {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <h1 className='tituloH1'>
                    RECURSOS DESARROLLO WEB
                </h1>
                <h4>
                    INGRESAR AQUI PARA PROBAR CODIGOS
                </h4>
                <a href="https://codi.link/" class="boton" target="_blank">pagina pruebas</a>
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
                <Link to={('/Recursos-react')}>
                    <div className="containerEnlace">
                        <button className="btn_enlace">ELEMENTOS REACT</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ComponentIndex