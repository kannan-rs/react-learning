import React, { useState, useEffect } from 'react'

function MouseMoveUnmountEffect() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log("User Effect - logged")
        window.addEventListener("mousemove", logMousePosition)

        // Unmount Call Back under Effects
        // We can have all our cleanup code
        return () => {
            console.log("User Effect - Unmount")
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])

    const logMousePosition = e => {
        console.log(" UseEffect - Mouse Event logged")
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            Logging Mouse Pointer - Effects - X - {x}, Y - {y}
        </div>
    )
}

export default MouseMoveUnmountEffect
