import React, { useState } from 'react'

function UserForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        alert(`FirstName = ${firstName} - LastName = ${lastName}`)
    }


    return (
        <div>
            <h2> Forms without Hooks </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name:
                    <input type="text" value = {firstName} onChange = { e => setFirstName(e.target.value)} ></input>
                </div>

                <div>
                    Last Name:
                    <input type="text" value = {lastName} onChange = { e => setLastName(e.target.value) } ></input>
                </div>
                <button type="submit">Submit User Form</button>
            </form>
            
        </div>
    )
}

export default UserForm
