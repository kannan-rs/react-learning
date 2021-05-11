import React, { Component } from 'react'

class Fragments extends Component {
    items = [1,2,3,4,5]
    render() {
        return (
            <React.Fragment>
                <h1>React Fragments</h1>
                <p>This is the description for react fragments</p>
                <p> We dont have parent element</p>

                <h2> Looping using Fragment</h2>

                <React.Fragment>
                    {
                    this.items.map( item => (
                        <React.Fragment key={item}>
                            <p>{item}</p>
                        </React.Fragment>
                    ))
                    }

                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default Fragments
