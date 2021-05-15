import React from 'react'

function ArrayListRenderChild( {person} ) {
    console.log(person)
    return (
        <div>
            i am {person.name}, with age {person.age} and intrested in {person.intrestedIn}
        </div>
    )
}

export default ArrayListRenderChild
