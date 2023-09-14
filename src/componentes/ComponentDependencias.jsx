import React from 'react'
import AcordeonDependencias from "./Acordeones/AcordeonDependencias"

const ComponentDependencias = () => {
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <h1 className='tituloH1'>DEPENDENCIAS</h1>
                <AcordeonDependencias />
        </div>
    )
}

export default ComponentDependencias