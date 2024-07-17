import React from 'react'
import AcordeonReact from './Acordeones/AcordeonReact'
import BotonVolver from './BotonVolver'

const ComponentReact = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className='tituloH1'>ELEMENTOS REACT</h1>
            <BotonVolver />
            <AcordeonReact />
        </div>
    )
}

export default ComponentReact