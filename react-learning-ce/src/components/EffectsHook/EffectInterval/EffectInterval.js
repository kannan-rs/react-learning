import React, {useState, useEffect} from 'react'

function EffectInterval() {
    const [ count, SetCounter] = useState(0)

    useEffect(() => {
        console.log("Initilizing Function . Effect")
        const interval = setInterval(tick, 1000)
        return () => {
            console.log("Destroying Effect")
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log(`Multiple Effects - Counter updated - ${count}`)
        return () => {
        }
    }, [count])

    const tick = () => {
        console.log("Func Comp - Interval")
        SetCounter( prevState => prevState + 1)
    }


    return (
        <div>
            <h2>Functional Component + Hooks for Interval</h2>
            <h2>Functional Comp - Interval - { count }</h2>
        </div>
    )
}

export default EffectInterval
