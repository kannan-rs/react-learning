import React, {useState} from 'react'

function StateHookForArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        // Append on array 
        setItems([ ...items, {
            id: items.length,
            value: items.length * 2
        }])
    }
    return (
        <div>
            <button onClick={ addItem }> Add a Number </button>
            <ul>
                {
                    items.map(
                        item => (
                            <li key= {item.id}> {item.value} </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default StateHookForArray
