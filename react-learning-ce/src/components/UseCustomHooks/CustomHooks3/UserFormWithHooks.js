import React from 'react'
import useInput from '../Hooks/useInput'

function UserFormWithHooks() {
    const [firstName, firstNameBind, firstNameReset] = useInput("")
    const [lastName, lastNameBind, LastNameReset] = useInput("")

    const handleSubmit = e => {
        e.preventDefault()
        alert(`FirstName = ${firstName} - LastName = ${lastName}`)
        firstNameReset()
        LastNameReset()
    }


    return (
        <div>
            <h2> Forms with Hooks </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name:
                    <input type="text" {...firstNameBind } ></input>
                </div>

                <div>
                    Last Name:
                    <input type="text" {...lastNameBind } ></input>
                </div>
                <button type="submit">Submit User Form</button>
            </form>
            
        </div>
    )
}

export default UserFormWithHooks

