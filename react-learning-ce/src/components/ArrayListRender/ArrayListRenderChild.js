import React from 'react'

function ArrayListRenderChild( {person} ) {
    console.log(person)
    return (
        <div>
            
            <h1>i am {person.name}, with age {person.age} and intrested in {person.intrestedIn}</h1>
        </div>
    )
}

export default ArrayListRenderChild
