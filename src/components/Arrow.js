import React from 'react'
import './ArrowCSS.css'

const Arrow = ({direction}) => {

    
    return (
        <div className={`arrow ${direction === 'left'? 'left':'right'}`}>
            <i class={`fas fa-chevron-${direction === 'left'? 'left': 'right'}`}></i>
        </div>
    )
}

export default Arrow;
