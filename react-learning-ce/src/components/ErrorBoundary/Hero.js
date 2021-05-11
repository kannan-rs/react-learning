import React from 'react'

function Hero({ name }) {
    if( name.toLowerCase() === "jocker") {
        throw new Error(`${name} is not a hero`)
    }

    return (
        <div>
            { name }
        </div>
    )
}

export default Hero
