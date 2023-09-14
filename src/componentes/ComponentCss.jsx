import React from 'react'
import AcordeonCss from './Acordeones/AcordeonCss'
import BotonVolver from './BotonVolver'


const ComponentCss = () => {
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <h1 className='tituloH1'>CSS</h1>
            <BotonVolver />
            <AcordeonCss />
        </div>
    )
}

export default ComponentCss