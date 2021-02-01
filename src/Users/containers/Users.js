import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Button from '../../Home/components/Button';
import { fetchUsers } from '../redux';
import UserList from '../components/UserList';

function Users({isError, isLoading, users, fetchUsers}) {
    console.log('USERS', users)
    console.log('isLoading', isLoading)

    useEffect(() => {
        fetchUsers()
    },[fetchUsers, users])

    // useEffect(() => {
    //     if (users.length === 0) {
    //       fetchUsers();
    //     }
    //   }, [fetchUsers, users]);
    
      console.log('IN', users)


    return (
        <div>
            <h1>Users</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong...</p>}
            {users && users.map(el => (
                <UserList key={el.login.uuid} name={el.name.first} />
            ))}
            <Button to="/" label="Back to Home" />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//       users: state.users.users,
//       isLoading: state.users.isLoading,
//       isError: state.users.isError
//     };
//   };
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchUsers: () => dispatch(fetchUsers())
//     };
//   };
//   export default connect(mapStateToProps, mapDispatchToProps)(Users);

const mapStateToProps = (state) => {
    return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    fetchUsers: () => dispatch(fetchUsers())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
