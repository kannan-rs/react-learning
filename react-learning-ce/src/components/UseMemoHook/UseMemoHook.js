import React, { useState, useMemo} from 'react'

function UseMemoHook() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne( counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo( counterTwo + 1)
    }

    /*
    const isEven = () => {
        // Introducing Delay to demo Hooks
        // As this function re runs even if there is no Respective state change,
        // It introduce delay or slowness on entire UI 
        let i = 0

        while ( i < Math.pow(6, 11)) i++
        return counterOne % 2 === 0
    }
    */

    const isEven = useMemo(() => {
        let i = 0

        while ( i < Math.pow(6, 11)) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <div>
            <h2> Explore UseMemo Hook</h2>

            <div>
                <button onClick= {() => incrementCounterOne()} > Counter #1 Clicked - {counterOne} - times </button>
                {/* <span> { isEven() ? "Even" : "Odd" } </span> */}
                <span> { isEven ? "Even" : "Odd" } </span>
            </div>
            <div>
                <button onClick={() => incrementCounterTwo() } > Counter #2 Clicked - {counterTwo} - times </button>
            </div>
        </div>
    )
}

export default UseMemoHook
