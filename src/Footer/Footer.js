import React from 'react'
import './Footer.css'

const Footer = (prop) => {
    const {selected} = prop

    return (
        <div>
            {selected.join(',')}
        </div>
    )
}

export default Footer