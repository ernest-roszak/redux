import React from 'react'
import { Link } from 'react-router-dom'

function Button( {label, to, onClick }) {
    return (
        <Link to={to}>
            <button onClick={onClick}>{label}</button>
        </Link>
    )
}

export default Button
