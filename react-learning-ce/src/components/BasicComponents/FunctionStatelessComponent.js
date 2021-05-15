import React from 'react'


const Greet = (props) => {
    return (
        <div>
            <p>Functional Component - Hello world</p>
            <h2>1st React program arrow function</h2>
            <h3> Props Passed as Argument - { props.name ? props.name : "Nothing"} </h3>
            <h3> 2nd Param - Props Passed as Argument - { props.otherName ? props.otherName : "Nothing"} </h3>
            Children Passed - { props.children ? props.children : "Nothing passed as Children" }
            <hr />
        </div>
    )
}

// const Greet = () => (React.createElement("h1", null, "Kannan -- 1st React program arrow function"))

export default Greet