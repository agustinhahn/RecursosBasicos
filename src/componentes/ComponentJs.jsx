import React from 'react'
import AcordeonJs from "./Acordeones/AcordeonJs"
import BotonVolver from './BotonVolver'

const ComponentJs = () => {
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <h1 className='tituloH1'>JS</h1>
            <BotonVolver />
            <AcordeonJs />
        </div>
    )
}

export default ComponentJs