import React from 'react'
import { Link } from 'react-router-dom'

const BotonVolver = () => {
    return (
        <div>
            <Link to={'../'}>
                <button>VOLVER MENU</button>
            </Link>
        </div>
    )
}

export default BotonVolver