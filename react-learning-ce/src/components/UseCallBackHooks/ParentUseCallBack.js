import React, {useState, useCallback} from 'react'

import Button from './Button'
import Count from './Count'
import Title from './Title'



function ParentUseCallBack() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)

    /* 
        Before Using Call Backs (This leads to re-rendering of children even if there is no change in the state, 
            because of funtion refrence changes on parent re-render)
    */
    /*
        // const incrementAge = () => {
        //     setAge( age + 1)
        // }

        // const incrementSalary = () => {
        //     setSalary( salary + 1000 )
        // }
    */

    // By using useCallbacks

    const incrementSalary = useCallback(
        () => {
            setSalary( salary + 1000 )
        },
        [salary],
    )

    const incrementAge = useCallback(
        () => {
            setAge( age + 1)
        },
        [age],
    )

    return (
        <div>
            <h1>Use Callback Hooks</h1>

            <Title />

            {/* For Age */}
            <Count text="Age" count= {age} />
            <Button handleClick = { incrementAge }>Increment Age</Button>

            {/* For Salary */}
            <Count text="Salary" count={salary} />
            <Button handleClick = { incrementSalary } >Increment Salary</Button>


        </div>
    )
}

export default ParentUseCallBack
