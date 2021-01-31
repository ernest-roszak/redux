import React, { useState, useEffect } from 'react'
import Button from '../../Home/components/Button';
import UserList from '../components/UserList';

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data =>  {
            setUsers(data.results)
            setLoading(false)
            setError(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
            setError(true)
        })
    }, [])
// console.log(users)
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong...</p>}
            {users.map(el => (
                <UserList key={el.login.uuid} name={el.name.first} />
            ))}
            <Button to="/" label="Back to Home" />
        </div>
    )
}

export default Users
