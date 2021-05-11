import React, { useState, useEffect, useRef} from 'react'

function UseRefHooksForElement() {

    const [timer, setTimer] = useState(0)
    /*
    // UseEffect Hook without UseRef Hooks
    useEffect(() => {
        const interval = setInterval( () => {
            setTimer (prevState => prevState + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    */
   
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval( () => {
            setTimer (prevState => prevState + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hooks Tier - { timer } - 
            {
            /*
                // Direct way of accessing a variable "interval" is not possible as it is created under Effects
                // Here UseRef Hooks help 
                <button onClick= { () => clearInterval(interval) }> Clear Interval Hooks Timer </button> 
            */
            }
            <button onClick= { () => clearInterval(intervalRef.current) }> Clear Interval Hooks Timer </button> 
        </div>
    )
}

export default UseRefHooksForElement
