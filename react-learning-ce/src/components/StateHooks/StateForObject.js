import React, {useState} from 'react'

function StateForObject() {
    const initialObject = {firstName: "", lastName: ""}
    const [ name, setName] = useState(initialObject)

    const [ name2, setName2] = useState(initialObject)

    return (
        <div>
            <h2> Only one object value is updated and others are removed - RESETED</h2>
            <input name="firstName" value={ name.firstName} onChange={ e => setName( { firstName: e.target.value } ) } ></input>
            <input name="lastName"  value={ name.lastName} onChange = {e => setName( { lastName: e.target.value } )} ></input>
            <h2> Object Value - { JSON.stringify( name )}</h2>

            <hr></hr>
            <h2> Only one object value is updated - Others RETAINED </h2>
            <h2> No Auto Merge as like Class STATE setter Function, Need Manual merge using SPREAD </h2>
            <input name="firstName1" value={ name2.firstName} onChange={ e => setName2( { ...name2, firstName: e.target.value } ) } ></input>
            <input name="lastName1"  value={ name2.lastName} onChange = {e => setName2( { ...name2, lastName: e.target.value } )} ></input>
            <h2> Object Value - { JSON.stringify( name2 )}</h2>
        </div>
    )
}

export default StateForObject
