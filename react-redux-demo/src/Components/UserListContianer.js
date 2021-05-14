import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

function UserListContianer( {usersData, fetchUsers } ) {
    useEffect(() => {
        fetchUsers()
    },[])

    return usersData.loading ? (
        <h2> Loading... </h2>
        ) : usersData.error ? (
            <h2> { usersData.error } </h2>
        ) : (
            <div>
                <h2> Users List </h2>
                <div>
                    {
                        // JSON.stringify(usersData)
                        usersData && usersData.users && usersData.users.map( user => <p> {user.name} </p>)
                    }
                </div>
            </div>
        )
}

const mapStateToProps = state => ({
    usersData: state.users
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch( fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContianer)
