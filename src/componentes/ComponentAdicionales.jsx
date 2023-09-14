import React from 'react'
import AcordeonAdicionales from "./Acordeones/AcordeonAdicionales"
import BotonVolver from './BotonVolver'

const ComponentAdicionales = () => {
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <h1 className='tituloH1'>ADICIONALES</h1>
            <BotonVolver />
            <AcordeonAdicionales />
        </div>
    )
}

export default ComponentAdicionales