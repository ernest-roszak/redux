import React from 'react'
import Button from '../components/Button'

function Home() {
    return (
        <div>
            <h1>Home1</h1>
            <Button to="/" label="Load" />
            <Button to="/" label="Reset" />
            <Button to="/" label="Add" />
            <Button to="/users/" label="go to users" />
        </div>
    )
}

export default Home
