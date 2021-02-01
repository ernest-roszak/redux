import React from 'react'

function ButtonCounter({ label, onClick }) {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default ButtonCounter;