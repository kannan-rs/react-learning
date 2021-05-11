import React from 'react'


const Greet = (props) => {
    return (
        <div>
            <h1>{props.name} 1st React program arrow function</h1>
            {props.children}
        </div>
    )
}

// const Greet = () => (React.createElement("h1", null, "Kannan -- 1st React program arrow function"))

export default Greet