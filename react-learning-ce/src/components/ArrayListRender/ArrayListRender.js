import React from 'react'
import ArrayListRenderChild from './ArrayListRenderChild'

function ArrayListRender() {
    const persons = [
        {
            id: 1,
            name: "name 1",
            age: 28,
            intrestedIn: "React"
        },
        {
            id: 2,
            name: "name 2",
            age: 25,
            intrestedIn: "Angular"
        },
        {
            id: 3,
            name: "name 3",
            age: 40,
            intrestedIn: "linux"
        },
        {
            id: 4,
            name: "name 4",
            age: 33,
            intrestedIn: "Veu"
        }
    ]

    // Key as a prop is not accesable in child component
    const personsList = persons.map( person => <ArrayListRenderChild key={person.id} person={ person } /> )
    
    return (
        <div>
            <h2>Render the list of elements from array</h2>
            <h3>Each List in the array Calls the CHILD COMPONENT for render 1 item</h3>
            { personsList }
        </div>
    )
}

export default ArrayListRender
