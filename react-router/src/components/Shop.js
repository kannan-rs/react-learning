import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
    const initialState = [
        {
            id: 1,
            name : "prod #1"
        },
        {
            id: 2,
            name : "prod #2"
        },
        {
            id: 3,
            name : "prod #3"
        },
        {
            id: 4,
            name : "prod #4"
        },
        {
            id: 5,
            name : "prod #5"
        },
        {
            id: 6,
            name : "prod #6"
        },
        {
            id: 7,
            name : "prod #7"
        }
    ]
    const [state, setstate] = useState(initialState)

    
    useEffect(() => {
        // effect
        return () => {
            // cleanup
        }
    }, [])
  return (
    <div className="shop">
        <ul className="product-link">
            {state.map( item => 
                <Link to={`/shop/${item.id}`} key={item.id}>
                    <li>{item.name} </li>
                </Link>
            )}
        </ul>
    </div>
  );
}

export default Shop
